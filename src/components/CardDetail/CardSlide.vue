<template>
    <div class="card-slide">
        <Swiper :modules="modules" :navigation="true" class="card-slide__swiper">
            <SwiperSlide v-for="image in images" :key="image">
                <img :src="image" alt="">
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]

const images = ref([
    'https://www.basketshop.ru/files/catalog/45730/184A3017im.JPG',
    'https://23sneakerstore.ru/wp-content/uploads/2024/04/photo_2024-04-29_20-21-20-2.jpg',
])
</script>

<style lang="scss" scoped>
.card-slide {
    &__swiper {
        width: 500px;
        display: flex;
        flex-direction: column;
        position: relative;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        flex: 1 1;

        img {
            width: 500px;
        }
    }
}
</style>