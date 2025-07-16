<template>
    <div class="home">
        <Header />
        <Navbar />
        <Products />
        <About />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Products from '../components/Products.vue';
import About from '../components/About.vue';
</script>

<style lang="scss" scoped>
* {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
}
</style>
