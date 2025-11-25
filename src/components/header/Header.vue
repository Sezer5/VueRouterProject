<template>
    <div class="container">
        <header class="d-flex py-3 border-bottom mb-3">
            <router-link class="me-auto text-decoration-none text-dark" to="/">
                <span class="fs-4">Sezer Ünalmış</span>
            </router-link>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Anasayfa</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/articles">Yazılarım</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">İletişim</router-link>
                </li>
                
            </ul>
        </header>
    </div>
</template>

<script setup>

</script>

<style>

</style>