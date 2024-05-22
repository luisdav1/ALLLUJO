<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="navbar">
      <form class="search-form">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>
      <div class="icons">
        <RouterLink to="/cart">
            <img src="../assets/bolsa.png">
        </RouterLink>     
        <RouterLink to="/favoritos">
            <img src="../assets/corazon.png">
        </RouterLink>
      </div>
    </nav>
  </template>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f9fa;
  }
  
  .search-form input,
  .search-form button {
    padding: 8px;
    margin-right: 10px;
    font-size: 1.4rem;
  }
  
  .icons a {
    margin-right: 10px;
    text-decoration: none;
    color: black;
  }
  </style>
