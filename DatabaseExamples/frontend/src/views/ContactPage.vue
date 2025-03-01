<template>
    <div class="contact-page">
        <h1>Contact the team!</h1>
    </div>

    <contact-form />

</template>

<script>

    import ContactForm from '../components/ContactForm.vue' // ../ to go back

    export default {
        name: 'ContactPage',
        components:{
            ContactForm,
        }
    }
</script>

<style scoped>
    .contact-page {
        margin-top: 20px;
        text-align: center;
    }
</style>