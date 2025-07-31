<template>
    <div class="home">
        <Header />
        <Navbar />
        <Category />
        <About />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Category from '../components/Category.vue';
import About from '../components/About.vue';
</script>

<style lang="scss">
* {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
}
</style>
