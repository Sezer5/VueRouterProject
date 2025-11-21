<template>
    <div class="row justify-content-center">
        <div class="col-lg-9 col-md-8">
            <h4 class="mb-5 text-center">İletişim</h4>
            <form>
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label class="form-label">Adı:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <label class="form-label">Soyadı:</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-12">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control">
                </div>
                <div class="col-12">
                    <label class="form-label">Konu:</label>
                    <textarea class="form-control" rows="5"></textarea>
                </div>
                <hr class="my-4">
                <button class="btn btn-primary btn-lg w-100">Gönder</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>