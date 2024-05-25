<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <NavBar></Navbar>
    </header>
    <Router-view/>
  </div>
</template>

<style scoped>

</style>
