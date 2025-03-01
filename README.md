# FunctioningVueApp

PG27 Simone Cormier 
Web App Frameworks 
A2: Running App

To run the program, in command line navigate to both 'backend' and 'frontend' folders in seperate cmds. In frontend folder run 'npm install' and then 'npm run dev' and in backend cmd run 'node server.js'.
Then navigate to Local: 'http://localhost:5173/' to see website.

To test the MongoDB features implemented you can either stay logged out and not see certain features or you can login using either the email 'super_cole@gmail.com' or 'super_jason@gmail.com' which are saved to the users database. Once logged in you are able to see the leaderboard. 

To the the SQL /api/leaderboard implementation you need to be logged in (as told above) and on the 'Leaderboard' page you will see the leaderboard in a table that is loaded in from the SQL database created. It is in order and you can sort it by score or by rank.

Finally you can submit a request through MongoDB using the 'Contact' page through /api/contact/. You are required to fill in first name/last name, email and message to send the message through. The data gets saved and sent to a new database I crated called contacts and I recieve the meessage in my MongoDB cluster. 
