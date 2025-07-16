<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer__section">
                    <h3>LUXE</h3>
                    <p>Ваш стиль — наша страсть</p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <Instagram :size="20" />
                        </a>
                        <a href="#" class="social-link">
                            <Facebook :size="20" />
                        </a>
                        <a href="#" class="social-link">
                            <Twitter :size="20" />
                        </a>
                    </div>
                </div>
                <div class="footer__section">
                    <h4>Покупателям</h4>
                    <ul>
                        <li><a href="#">Доставка и оплата</a></li>
                        <li><a href="#">Возврат товара</a></li>
                        <li><a href="#">Размерная сетка</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h4>Компания</h4>
                    <ul>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Пресс-центр</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h4>Контакты</h4>
                    <p>+7 (495) 123-45-67</p>
                    <p>info@luxe-store.ru</p>
                    <p>Москва, ул. Тверская, 1</p>
                </div>
            </div>
            <div class="footer__bottom">
                <p>&copy; 2024 LUXE. Все права защищены.</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.footer {
    background: $light-gray;
    padding: 3rem 0 1rem;

    &__content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    &__section {

        h3,
        h4 {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 1rem;
        }

        p {
            color: $secondary-color;
            margin-bottom: 0.5rem;
        }

        ul {
            list-style: none;

            li {
                margin-bottom: 0.5rem;

                a {
                    color: $secondary-color;
                    text-decoration: none;
                    transition: color 0.3s ease;

                    &:hover {
                        color: $primary-color;
                    }
                }
            }
        }
    }

    &__bottom {
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid $border-color;
        color: $secondary-color;
    }
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: $white;
    border-radius: 50%;
    color: $primary-color;
    transition: all 0.3s ease;

    &:hover {
        background: $primary-color;
        color: $white;
    }
}
</style>