<script setup>
    import { ref, onMounted, computed } from 'vue';
    import { useUserStore } from './stores/UserStore.js';
    const userStore = useUserStore();


   
</script>

<template>
    <div>
        <nav>
            <div class="navbar">
                <router-link to="/">Landing</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/leaderboard">Leaderboard</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/contact">Contact Us</router-link>
            </div>
            <div class="login">
                <div v-if="!userStore.user">
                    <p>You are not logged in.</p>
                </div>
                <div v-else>
                    <b>Logged in as: {{ userStore.user.username }}</b>
                </div>
            </div>
        </nav>

        <main>
            <router-view />
        </main>
    </div>
</template>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        padding: 0 50px;
        background-color:blanchedalmond;
    }

    .navbar {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        gap: 20px; 
    }
    .login {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }

</style>