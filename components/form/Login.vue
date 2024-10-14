<script setup lang="ts">
const form = ref({email: '', password: ''});
const {login, processing, errors} = useAuth(form.value);
</script>

<template>
  <form @submit.prevent="login">
    <div class="mb-12 row my-4">
      <label for="email" class="col-sm-4 col-form-label fs-5 fw-bolder">Correo</label>
      <div class="col-sm-8">
        <input type="text" class="form-control" id="email" v-model.trim="form.email">
      </div>
    </div>
    <div class="mb-12 row my-4">
      <label for="password" class="col-sm-4 col-form-label fs-5 fw-bolder">Contraseña</label>
      <div class="col-sm-8">
        <input type="password" class="form-control" id="password" v-model.trim="form.password">
      </div>
    </div>
    <div class="mb-12 row my-4">
      <div class="col-sm-6">
        <button type="submit" class="btn btn-secondary">Ingresar</button>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>