<template>
    <div class="navbar">
        <div class="container">
            <nav class="navbar__nav">
                <ul>
                    <li class="navbar__nav-link">Футболки</li>
                    <li class="navbar__nav-link">Свитшоты</li>
                    <li class="navbar__nav-link">Худи</li>
                    <li class="navbar__nav-link">Куртки</li>
                    <li class="navbar__nav-link">Брюки</li>
                    <li class="navbar__nav-link">Джинсы</li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    margin-top: 50px;

    &__nav {

        ul {
            @include flex-between;
        }
    }

    &__nav-link {
        text-decoration: none;
        list-style: none;
        color: $primary-color;
        font-weight: 400;
        transition: color 0.3s ease;

        &:hover {
            color: $accent-color;
        }
    }
}
</style>