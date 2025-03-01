<script setup>
    import {ref, onMounted, computed} from 'vue';
    import {useUserStore} from '../stores/UserStore.js';

    const userStore = useUserStore();

    const email = ref('');

    onMounted(()=>{

    })

    async function handleLogin() {
        try{
            await userStore.login(email.value);
        }catch(err){
            alert(err.message);
        }
    }

    function logout(){
        userStore.logout();
    }

</script>

<template>
    <div class="landing-page">
        <h1>Welcome to Raf Housing, where we house them rafs</h1>
        <p>This is the landing page :)</p>

        <div v-if="!userStore.user">
            <h1>Login</h1>
            <input v-model="email"
                   type="email"
                   placeholder="Enter your email" />
            <button @click="handleLogin">Login</button>
        </div>
        <div v-else>
            <h1>Welcome, {{ userStore.user.username }}</h1>
            <p>Email: {{ userStore.user.email }}</p>
            <button @click="logout">Logout</button>
        </div>
    </div>

</template>

<style scoped>
    .landing-page {
        margin-top: 20px;
        text-align: center;
    }

    button {
        background-color: #05754a;
        color: white;
        border: none;
        margin: auto;
        margin-top: 20px;
        display: block;
        border-radius: 4px;
        cursor: pointer;
        padding: 8px 12px;
        width: 100px;
    }

        button:hover {
            background-color: #45a049;
        }

        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
</style>