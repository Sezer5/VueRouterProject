<template>
    <app-header></app-header>
    <div class="container">
      
      <Article />
    </div>

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Home from './components/Home.vue';
import Articles from './components/articles/Articles.vue';
import Article from './components/articles/Article.vue';
</script>
<style scoped>

</style>
