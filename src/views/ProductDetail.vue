<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }} ₽</p>
    <button @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const product = ref({
  name: 'Название товара',
  description: 'Описание товара',
  price: 0,
});

function addToCart() {
  // Логика добавления в корзину
  alert('Товар добавлен в корзину!');
}

onMounted(() => {
  // Здесь можно загрузить данные о товаре
});
</script>

<style scoped>
.product-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
}
</style>
