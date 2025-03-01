const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")
const mysql = require("mysql2/promise")

const app = express();
app.use(cors());    
app.use(express.json());

const port = 3000;

const mongoUri = "mongodb+srv://admin:vfsvfsvfs@cluster0.uipnp.mongodb.net/"
const mongoClient = new MongoClient(mongoUri);

const dbConfig = {
    host: "database-2.czeee2egge1d.ca-central-1.rds.amazonaws.com",
    user: "admin",
    password: "vfsvfsvfs",
    database: "leaderboard_db_simone"
}

async function startServer(){
    try{
        await mongoClient.connect();
        console.log("Connected to MongoDB");

        const db = mongoClient.db("myFirstDatabase");
        const usersCollection = db.collection("users");

        //getting contact info - creating a new contacts db in mongoDB
        const contactsCollection = db.collection("contacts");



    //log in post
    app.post("/api/login", async(req, res) => {
        const {email} = req.body;
        try{
            const user = await usersCollection.findOne({email})

            if(!user)
            {
                return res.status(404).json({error:"User not found"}) //404 is user error
            }

            res.json({
                _id: user._id,
                username: user.username,
                email: user.email
            })
        }catch(error)
        {
            console.error("Login error:", error)
            res.status(500).json({error: "Internal server error"}) // 500 is internal error
        }
    });

    //contact form submission endpoint
    app.post("/api/contact", async (req, res) => {
        const { firstName, lastName, email, phone, message } = req.body;

        //validate required fields incase
        if (!firstName || !lastName || !email || !message) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            //collect data from fields
            const contactData = {
                firstName,
                lastName,
                email,
                phone,
                message,
                //time form was submitted on
                createdAt: new Date()
            };

            const result = await contactsCollection.insertOne(contactData);

            res.status(201).json({
                success: true,
                message: "Contact form submitted successfully",
                id: result.insertedId
            });
        } catch (error) {
            console.error("Contact submission error:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });

    //get out leaderboard from SQL db created
    app.get("/api/leaderboard", async(req, res) => {
        const count = parseInt(req.query.count) || 10; //default to 10
        let connection;

        try{
            connection = await mysql.createConnection(dbConfig);
            const [rows] = await connection.execute(
                `SELECT player_name, score FROM players
                ORDER BY score DESC
                LIMIT ${count}`//for sql
            );
            res.json({success: true, data: rows});
        }catch(error){
            console.log("Error fetching leaderboard", error);
            res.status(500).json({error: "Internal server error"});
        } finally{
            if(connection){
                await connection.end();
            }
        }
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });

    }catch(error)
    {
        console.error("Server start error:", error)
    }
    
}

startServer().catch(console.error);
