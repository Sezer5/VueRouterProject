<template>
  <div class="row bg-dark text-white p-4 rounded-5 mb-4">
        <div class="col-md-6">
            <h1 class="fst-italic display-4">Lorem</h1>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis rem! Sequi est culpa, vitae minima minus voluptates ducimus, quidem quis ipsam earum tempora at unde vel in sit id?</p>
        </div>
  </div>
  <div class="row" v-if="article">
        <div class="col-md-8">
            <h3 class="fst-italic border-bottom pb-4 mb-4">{{ article.title }}</h3>
            <div>
                <p>{{ article.date }} <strong>{{ article.author }}</strong></p>
                <p>{{ article.summary }}</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="bg-light p-4 rounded-5">
                <h4 class="fst-italic">Lorem</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quas dolore illo perferendis et nobis itaque nisi consequuntur rerum eveniet laboriosam ducimus reprehenderit in, minus deserunt ullam! Fugit, exercitationem libero!</p>
            </div>
        </div>
  </div>
  
</template>

<script setup>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted, onUnmounted,reactive,ref } from 'vue';
const article = ref({});
const route = useRoute();
const loadArticle = (articleId)=>{
    axios.get(`http://localhost:3000/articles/${articleId}`).then(response => {
       article.value = response.data;
    });
}
onMounted(()=>{
    loadArticle(route.params.articleId)
})

</script>

<style>

</style>