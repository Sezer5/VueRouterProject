<template>
    <app-header></app-header>
    <div class="container">
      <Home />
    </div>

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
</script>
<style scoped>

</style>
