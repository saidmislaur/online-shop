<template>
    <div class="home">
        <Header />
        <Navbar />
        <!-- <Hero /> -->
        <Products />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
// import Hero from '../components/Hero.vue';
import Products from '../components/Products.vue';
</script>

<style lang="scss" scoped>
* {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
}
</style>
