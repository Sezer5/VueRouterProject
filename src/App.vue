<template>
    <app-header></app-header>
    <div class="container">
      
      <router-view></router-view>
      <router-view name="warning"></router-view>
    </div>

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Home from './components/Home.vue';
import Articles from './components/articles/Articles.vue';
import Article from './components/articles/Article.vue';
import Contact from './components/contact/Contact.vue';
</script>
<style scoped>

</style>
