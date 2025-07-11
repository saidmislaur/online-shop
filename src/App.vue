<script setup lang="ts"></script>

<template>
  <main>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<style lang="scss">
.fashion-store {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: $primary-color;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: -0.02em;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
