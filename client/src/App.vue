<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      App

      <nav>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
