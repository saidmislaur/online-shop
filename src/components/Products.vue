<template>
    <section class="products">
        <Header />
        <h1>все товары</h1>
        <div class="products__lists">
            <RouterLink v-for="(item, index) in products" :key="index" :to="`/card:${item.id}`" class="products__grid">
                <Card :name="item.name" :price="item.price" :image="item.image" :category="item.category" oldPrice />
            </RouterLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import Header from './Header.vue'
import { getProducts } from '../api/product'
import { ref, onMounted } from 'vue'

const items = ref([])

const loadProducts = async () => {
    try {
        const response = await getProducts()
        items.value = response.data
        console.log('Products loaded:', items.value)
    } catch (error) {
        // handle error if needed
    }
}

onMounted(() => {
    loadProducts()
})

const products = ref([
    {
        id: 1,
        name: 'Футболка',
        price: 1500,
        image: 'https://footboxshop.ru/upload/resize_cache/iblock/aa5/1500_1500_2/kzudzx6p7ehqpe5svvrawo3vdqm4wv2k.jpg',
        category: 'Футболки'
    },
    {
        id: 2,
        name: 'Свитшот',
        price: 2500,
        image: 'https://brand-centr.com/image/cache/catalog/%20-1-1732808038-1500x1500.jpg',
        category: 'Свитшоты'
    }
])
</script>

<style lang='scss' scoped>
.products {
    padding: 2rem;
    background: $light-gray;
    margin-top: 50px;

    &__lists {
        display: flex;
        gap: 2rem;
        margin-top: 50px;
    }
}
</style>