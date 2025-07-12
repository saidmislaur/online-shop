<template>
    <section class="hero">
        <div class="hero__content">
            <div class="hero__text">
                <h2 class="hero__title">Новая коллекция</h2>
                <h3 class="hero__subtitle">Весна/Лето 2024</h3>
                <p class="hero__description">
                    Откройте для себя последние тенденции моды и создайте свой неповторимый стиль
                </p>
                <BaseButton variant="primary" size="small">
                    Смотреть коллекцию
                </BaseButton>
            </div>
            <div class="hero__image">
                <img src="https://www.runlab.ru/f/upload/nike_running_utility_oderzhi_pobedu_nad_holodom_1.jpg"
                    alt="Fashion Model" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
</script>

<style lang="scss">
.hero {
    min-height: 70vh;
    @include flex-center;
    background: linear-gradient(135deg, $light-gray 0%, $white 100%);

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        align-items: center;
        max-width: 1200px;
        padding: 0 20px;
    }

    &__title {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.2;
        margin-bottom: 1rem;
    }

    &__subtitle {
        font-size: 1.5rem;
        font-weight: 400;
        color: $secondary-color;
        margin-bottom: 1.5rem;
    }

    &__description {
        font-size: 1.1rem;
        color: $secondary-color;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    &__image {
        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }
}
</style>