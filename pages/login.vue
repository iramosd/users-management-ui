<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})
</script>

<template>
    <div class="mb-12 row my-4">
      <label for="staticEmail" class="col-sm-4 col-form-label fs-5 fw-bolder">Correo</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="email">
      </div>
    </div>
    <div class="mb-12 row my-4">
      <label for="inputPassword" class="col-sm-4 col-form-label fs-5 fw-bolder">Contraseña</label>
      <div class="col-sm-8">
        <input type="password" class="form-control" id="password">
      </div>
    </div>
    <div class="mb-12 row my-4">
      <div class="col-sm-6">
        <button type="button" class="btn btn-secondary">Ingresar</button>
      </div>
    </div>
</template>

<style scoped>

</style>