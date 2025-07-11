<template>
    <div class="header" ref="headerRef">
        <div class="container">
            <div class="header__content">
                <div class="header__logo">
                    <h1>LUXE</h1>
                </div>
                <div class="header__actions">
                    <transition name="fade">
                        <input v-if="showSearch" v-model="searchValue" class="header__search" placeholder="поиск..."
                            type="text">
                    </transition>
                    <button class="icon-btn" @click="toggleSearch">
                        <Search :size="20" />
                    </button>
                    <button class="icon-btn">
                        <User :size="20" />
                    </button>
                    <button class="icon-btn cart-btn">
                        <ShoppingBag :size="20" />
                        <span class="cart-count">3</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, User, ShoppingBag, Instagram, Facebook, Twitter } from 'lucide-vue-next'
import { ref, onMounted, onBeforeUnmount } from 'vue'


const showSearch = ref(false)
const searchValue = ref('')
const headerRef = ref<HTMLElement | null>(null)

const toggleSearch = () => {
    showSearch.value = !showSearch.value
}

const handleClickOutside = (event: MouseEvent) => {
    if (headerRef.value && !headerRef.value.contains(event.target as Node)) {
        showSearch.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style lang="scss">
$primary-color: #000;
$secondary-color: #666;
$accent-color: #ff6b6b;
$light-gray: #f8f8f8;
$white: #fff;
$border-color: #e0e0e0;

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: $white;
    z-index: 1000;
    border-bottom: 1px solid $border-color;

    &__content {
        @include flex-between;
        height: 80px;
    }

    &__logo {
        h1 {
            font-size: 1.8rem;
            font-weight: 300;
            letter-spacing: 2px;
        }
    }

    &__actions {
        display: flex;
        gap: 1rem;
    }

    &__search {
        width: 200px;
        padding: 8px 12px;
        border: 1px solid $border-color;
        border-radius: 4px;
        margin-right: 8px;
        outline: none;
    }

    .icon-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 50%;
        transition: background 0.3s ease;

        &:hover {
            background: $light-gray;
        }
    }
}
</style>