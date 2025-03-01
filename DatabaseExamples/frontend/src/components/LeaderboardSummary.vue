<script>
    export default {
        name: 'LeaderboardSummary',
        data(){
            return{
                leaderboardData: [],
                errorMessage: '',
                sortDirection: 'desc', 
                currentSort: 'score',
                loading: true,
            }
        },
        computed: {
            sortedData() {
                // First sort by score to establish initial ranks
                const rankedData = [...this.leaderboardData].sort((a, b) => b.score - a.score)
                    .map((item, index) => ({
                        ...item,
                        rank: index + 1
                    }));

                // Then apply the current sort
                return rankedData.sort((a, b) => {
                    const modifier = this.sortDirection === 'desc' ? -1 : 1;
                    
                    if (this.currentSort === 'score') {
                        return modifier * (a.score - b.score);
                    } else if (this.currentSort === 'rank') {
                        return modifier * (a.rank - b.rank);
                    }
                    return 0;
                });
            }
        },
        methods: {
            toggleSort() {
                this.sortDirection = this.sortDirection === 'desc' ? 'asc' : 'desc';
            },
            async fetchLeaderboardData() {
                try {
                    const res = await fetch('/api/leaderboard');
                    if (!res.ok) { //server error
                        throw new Error(`Server returned status ${res.status}`);
                    }
                    const response = await res.json(); //convert to json so we can process it
                    this.leaderboardData = response.data;
                } catch (err) { //promise error
                    this.errorMessage = err.message;
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.fetchLeaderboardData()
                this.loading = false;
            }, 2000) //wait two seconds
        }
    }
</script>

<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thead>
                <tr>
                    <th @click="currentSort = 'rank'; toggleSort()" class="sortable">
                        Rank
                        <span class="sort-icon">{{ sortDirection === 'desc' ? '↓' : '↑' }}</span>
                    </th>
                    <th>Player</th>
                    <th @click="currentSort = 'score'; toggleSort()" class="sortable">
                        Score
                        <span class="sort-icon">{{ sortDirection === 'desc' ? '↓' : '↑' }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in sortedData" :key="item.player_name">
                    <td>{{ item.rank }}</td>
                    <td>{{ item.player_name }}</td>
                    <td>{{ item.score }}</td>
                </tr>
            </tbody>
        </table>
        <p v-if="loading">Loading leaderboard...</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
    .leaderboard-summary {
        margin-top: 10px;
        text-align: center;
    }

    table {
        margin: 0 auto;
        border-collapse: collapse;
    }

    th {
        border: 1px solid #ccc;
        padding: 15px;
        color: green;
    }

    th.sortable {
        cursor: pointer;
        user-select: none;
    }

    th.sortable:hover {
        background-color: #f0f0f0;
    }

    td {
        border: 1px solid #ccc;
        padding: 15px;
    }

    .error {
        color: red;
    }

    .sort-icon {
        display: inline-block;
        margin-left: 5px;
    }
</style>