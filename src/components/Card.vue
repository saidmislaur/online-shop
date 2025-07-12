<template>
    <div class="products__grid">
        <div v-for="product in productsProducts" :key="product.id" class="product-card">
            <div class="product-card__image">
                <img :src="product.image" :alt="product.name" />
                <div class="product-card__overlay">
                    <button class="btn btn--small">Быстрый просмотр</button>
                </div>
            </div>
            <div class="product-card__content">
                <h3 class="product-card__name">{{ product.name }}</h3>
                <div class="product-card__price">
                    <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }}₽</span>
                    <span class="current-price">{{ product.price }}₽</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    productsProducts: Array<any>
})
</script>

<style lang="scss" scoped>
.product-card {
    background: $white;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);

    &:hover {
        transform: translateY(-3px);
    }

    &__image {
        position: relative;
        height: 400px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover .product-card__overlay {
            opacity: 1;
        }
    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        @include flex-center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &__content {
        padding: 1.5rem;
    }

    &__name {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }

    &__price {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .old-price {
            text-decoration: line-through;
            color: $secondary-color;
            font-size: 0.9rem;
        }

        .current-price {
            font-weight: 600;
            font-size: 1.1rem;
        }
    }
}
</style>