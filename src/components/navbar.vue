<template>
    <div class="navbar">
        <div class="container">
            <nav class="navbar__nav">
                <ul>
                    <li v-for="(item, index) in navLists" :key="index"
                        :class="['navbar__nav-link', { active: activeItem === item }]" @click="activeItem = item">
                        {{ item }}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const navLists = ['Все', 'Футболки', 'Свитшоты', 'Худи', 'Куртки', 'Брюки', 'Джинсы']
const activeItem = ref('Все')
</script>
<style lang="scss">
.navbar {
    margin-top: 50px;
    padding: 10px;
    background-color: rgb(189, 187, 187);

    &__nav {

        ul {
            @include flex-between;
            padding-left: 0px;

            li {
                font-size: 20px;
                text-transform: uppercase;
            }
        }
    }

    &__nav-link {
        text-decoration: none;
        list-style: none;
        color: $primary-color;
        font-weight: 300;
        transition: color 0.3s ease;
        cursor: pointer;

        &:hover {
            color: #fbfbfb;
        }
    }

    .active {
        color: #fbfbfb;
        font-weight: bold;
        border-bottom: 2px solid #fbfbfb;
    }
}
</style>