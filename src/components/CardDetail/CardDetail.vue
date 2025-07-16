<template>
    <div class="card-detail container">
        <Header />
        <div class="card-detail__product">
            <div class="card-detail__image-slide">
                <CardSlide />
            </div>
            <div class="card-detail__product-info">
                <div class="card-detail__product-info-title">
                    <h2>Зеленый худи</h2>
                </div>
                <div class="card-detail__product-info-price">
                    <span>20.26 EUR</span>
                </div>
                <div class="card-detail__product-info-sizes">
                    <div class="size-selection">
                        <p class="size-label">Выберите размер:</p>
                        <div class="size-options">
                            <button v-for="size in sizes" :key="size"
                                :class="['size-btn', { 'size-btn--active': selectedSize === size }]"
                                @click="selectSize(size)">
                                {{ size }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '../Header.vue'
import CardSlide from './CardSlide.vue'

const selectedSize = ref('XS')

const sizes = ref(['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'])

const selectSize = (size: string) => {
    selectedSize.value = size
}
</script>

<style lang="scss">
.card-detail {
    h2 {
        margin-top: 100px;
    }

    &__product {
        display: flex;
        max-width: 1500px;
        position: relative;
        width: 90vw;
        z-index: 1;
        margin-top: 200px;

        &-info {
            margin-left: 70px;

            &-price {
                background: #000;
                color: #ebe6e8;
                align-items: center;
                border-radius: 100px;
                display: flex;
                height: 2em;
                position: relative;
                white-space: nowrap;
                font-size: 24px;
                background: #000;
                padding: 0 1em;
                z-index: 1;

            }
        }
    }
}

.size-selection {
    margin-bottom: 30px;

    .size-label {
        font-size: 18px;
        color: $gray-dark;
        margin-bottom: 15px;
    }

    .size-options {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .size-btn {
        width: 45px;
        height: 45px;
        border: 1px solid $gray-medium;
        background: $white;
        color: $gray-dark;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 50%;

        &:hover {
            border-color: $black;
        }

        &--active {
            background: $black;
            color: $white;
            border-color: $black;
        }
    }
}
</style>