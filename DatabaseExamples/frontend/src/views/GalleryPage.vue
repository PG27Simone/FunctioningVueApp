<template>
    <div class="gallery-page">
        <h1>Gameplay Gallery</h1>
        <p>Some photos of the gameplay</p>
    </div>

    <photo-gallery />

</template>

<script>
    import PhotoGallery from '../components/PhotoGallery.vue' // ../ to go back

    export default {
        name: 'GalleryPage',
        components:{
            PhotoGallery,
        }
    }
</script>

<style scoped>

    .gallery-page {
        margin-top: 20px;
        text-align: center;
    }
</style>