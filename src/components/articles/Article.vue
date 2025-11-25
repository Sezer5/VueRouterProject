<template>
  <div class="row bg-dark text-white p-4 rounded-5 mb-4">
        <div class="col-md-6">
            <h1 class="fst-italic display-4">Lorem</h1>
            <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, officiis rem! Sequi est culpa, vitae minima minus voluptates ducimus, quidem quis ipsam earum tempora at unde vel in sit id?</p>
        </div>
  </div>
  <div class="row">
        <div class="col-md-8">
            <h3 class="fst-italic border-bottom pb-4 mb-4">Lorem</h3>
            <div>
                <p>14 Haziran 2022 <strong>Sezer ÜNALMIŞ</strong></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorum eveniet perspiciatis in nobis ea necessitatibus provident cupiditate recusandae minima maxime, voluptatem reiciendis sequi nesciunt libero. Rerum omnis itaque aperiam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere autem necessitatibus, fugiat neque fuga nam, mollitia, reiciendis nobis voluptatem inventore. Modi quidem velit voluptatem animi nemo veniam placeat quibusdam!</p>
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

const route = useRoute();
console.log(route.params.articleId);

</script>

<style>

</style>