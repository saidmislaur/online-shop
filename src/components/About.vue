<template>
    <section class="about">
        <div class="container">
            <div class="about__content">
                <div class="about__text">
                    <h2>О бренде LUXE</h2>
                    <p>
                        Мы создаем одежду для тех, кто ценит качество, стиль и комфорт.
                        Наша миссия — помочь каждому выразить свою индивидуальность через моду.
                    </p>
                    <p>
                        Более 10 лет мы следим за мировыми трендами и создаем коллекции,
                        которые подчеркивают вашу уникальность.
                    </p>
                    <button class="btn btn--outline">Узнать больше</button>
                </div>
                <div class="about__image">
                    <img src="https://elis.ru/img/about/2.jpg" alt="About Us" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.about {
    padding: 5rem 0;

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    &__text {
        h2 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 1.5rem;
        }

        p {
            font-size: 1.1rem;
            color: $secondary-color;
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }
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