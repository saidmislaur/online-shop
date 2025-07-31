<template>
    <section class="category">
        <div class="container">
            <div class="category__main">
                <div class="category__grid">
                    <div class="category__item" v-for="(item, index) in categories" :key="index">
                        <RouterLink to="/products">
                            <img :src="item.image" alt="Category Image">
                            <h2>{{ item.name }}</h2>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = ref([
    {
        id: 1,
        name: 'Мужское',
        image: 'https://footboxshop.ru/upload/resize_cache/iblock/aa5/1500_1500_2/kzudzx6p7ehqpe5svvrawo3vdqm4wv2k.jpg'
    },
    {
        id: 2,
        name: 'женское',
        image: 'https://brand-centr.com/image/cache/catalog/%20-1-1732808038-1500x1500.jpg'
    }
])
</script>

<style lang="scss" scoped>
.category {
    padding: 5rem 0;
    background: $light-gray;

    &__button {
        text-align: center;
        margin-top: 30px;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
    }

    &__item {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s ease;
        cursor: pointer;

        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }

        h2 {
            margin-top: 1rem;
            font-size: 1.5rem;
            color: $primary-color;
        }

        &:hover {
            transform: scale(1.05);
        }
    }
}
</style>