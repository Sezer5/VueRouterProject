<template>
    <div class="row g-4">
        <div class="col-lg-3 col-md-6 col-sm-12" v-for="article in data.articles" :key="article.id">
            <div class="card" style="width: 18rem;">
                <img :src="article.img+'?'+article.id" class="card-img-top shadow-sm">
                <div class="card-body">
                    <p class="card-text summary">{{ article.summary }}</p>
                    <router-link :to="'/articles/'+article.id">
                        <button class="btn btn-outline-secondary">Devamını Oku</button>
                    </router-link>
                </div>
            </div>
        </div>
         
    </div>
    <router-view></router-view>
</template>

<script setup>
import axios from 'axios';
import { onMounted, onUnmounted,reactive } from 'vue';
const data = reactive({
    articles:[]
});
onMounted(()=>{
    axios.get('http://localhost:3000/articles').then(response=>{
        data.articles=response.data;
    })
})
</script>

<style scoped>
    

.summary {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>