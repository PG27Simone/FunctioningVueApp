<script setup>
    import { ref, onMounted } from 'vue'
    import { useUserStore } from '../stores/UserStore.js';

    const userStore = useUserStore();

    //adding components
    import LeaderboardSummary from '../components/LeaderboardSummary.vue' // ../ to go back
    import Controls from '../components/Controls.vue'
    import SeeMoreInfo from '../components/SeeMoreInfo.vue'

</script>

<template>
    <div class="leaderboard-page">

        <h1>Player Leaderboard</h1>


        <p v-if="userStore.user">
            Logged in as: {{ userStore.user.username }} ({{ userStore.user.email }})

            <leaderboard-summary />
        </p>
        <p v-else>
            You are not logged in. Log in to see leaderboard.
        </p>


        <controls />

        <see-more-info />

    </div>

    <!--fill in for leaderboard page-->
</template>

/<!--scoped makes sure this style is only visible in this script-->
<style scoped>
    .leaderboard-page {
        margin-top: 20px;
        text-align: center;
    }
</style>