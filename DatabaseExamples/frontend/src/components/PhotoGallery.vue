<script>
    export default {
        name: 'PhotoGallery',

    data() {
        return {
            images: [
                    '../assets/zelda.jpg',
                    '../assets/botw.jpg',
                    '../assets/windwaker.jpg',
                    '../assets/zeldatg.jpg',
                    '../assets/linkjump.jpg',
                    '../assets/spirittracks.jpg',
                    ],
            previewImage: ''
        };
    },
    methods: {
        showPreview(image) {
            this.previewImage = image;
        },
        closePreview() {
            this.previewImage = '';
        }
    }

}
</script>

<template>

    <div class="photo-gallery">
        <div class="image-container">
            <img v-for="(image, index) in images" :key="index" :src="image" class="cover" alt="Image" @click="showPreview(image)">
        </div>
        <div class="preview" v-if="previewImage">
            <span class="close" @click="closePreview">
                &times;
            </span>

            <img :src="previewImage" alt="Preview">
        </div>
    </div>

</template>

<style>

    .image-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .cover {
        object-fit: cover;
        width: 400px;
        height: 400px;
        margin: 30px;
        cursor: pointer;
    }

    .preview {
        display: block;
        position: fixed;
        z-index: 500;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.9);
    }

        .preview img {
            margin: auto;
            display: block;
            max-width: 80%;
            max-height: 80%;
            margin-top: 50px;
        }

    .close {
        color: #fff;
        position: absolute;
        top: 15px;
        right: 35px;
        font-size: 30px;
        cursor: pointer;
    }

        .close:hover,
        .close:focus {
            color: #ccc;
            text-decoration: none;
            cursor: pointer;
        }
</style>