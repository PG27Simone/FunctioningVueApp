<script>
    export default {
        name: 'SeeMoreInfo',

        methods: {
            goToAboutPage() {
                this.$router.push("/about");
            },
            goToGalleryPage() {
                this.$router.push("/gallery");
            },
        }

    }
</script>

<template>
    <div class="moreinfo-form">
        <h3>Want to find out more?</h3>

        <div class="button-container">
            <button @click="goToAboutPage" type="button">See About</button>
            <button @click="goToGalleryPage" type="button">See Gallery</button>
        </div>
    </div>

</template>

<style scoped>

    .moreinfo-form {
        margin-top: 50px;
        text-align: center;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    button {
        margin-left: 10px;
        margin-right: 10px;
        background-color: rgb(21, 21, 184);
        border-radius: 10px;
    }
</style>