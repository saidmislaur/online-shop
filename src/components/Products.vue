<template>
    <section class="products">
        <div class="container">
            <Card :productsProducts="productsProducts" />
            <div class="products__button">
                <BaseButton variant="outline" size="large">
                    Смотреть все
                </BaseButton>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import Card from './Card.vue'

const productsProducts = ref([
    {
        id: 1,
        name: 'Спортивные штаны',
        price: 15990,
        image: 'https://footboxshop.ru/upload/resize_cache/iblock/aa5/1500_1500_2/kzudzx6p7ehqpe5svvrawo3vdqm4wv2k.jpg'
    },
    {
        id: 2,
        name: 'Стильные джинсы',
        price: 6990,
        oldPrice: 8990,
        image: 'https://brand-centr.com/image/cache/catalog/%20-1-1732808038-1500x1500.jpg'
    },
    {
        id: 3,
        name: 'Кожаная куртка',
        price: 12990,
        image: 'https://static.shuclothes.com/sig/size:8192/aHR0cHM6Ly9zaHVjbG90aGVzLmNvbS9zdG9yYWdlLzIzNzk3L9C60L7RgNC-0YLQutCw0Y9f0LbQtdC90YHQul_Rh9C10YDQvTA2NDMuanBn'
    }
])
</script>

<style lang="scss" scoped>
.products {
    padding: 5rem 0;
    background: $light-gray;

    &__button {
        text-align: center;
        margin-top: 30px;
    }
}

.products__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

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