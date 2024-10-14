<script setup>
const axios = useNuxtApp().$axios;
const baseUrl = 'http://localhost:8000';
const errors = ref(null);
const form = ref({email: '', password: ''});
const processing =ref(false);
const {user, userPermissions} = storeToRefs(useAuthStore());


const login = async () => {
  processing.value = true;
  errors.value = {};
  await axios.get(baseUrl+'/sanctum/csrf-cookie');

  await axios.post(baseUrl+'/login', form.value)
      .then(() => {
        me().then( () => navigateTo('/') );
      })
      .catch(({response: {data}}) => {
        errors.value = data.errors;
      })
      .finally(() => {
        processing.value = false;
      })
}

const me = async () => {
  await axios.get(baseUrl+'/api/user')
      .then(({data}) => {
        user.value = data.data.user;
        userPermissions.value = data.data.permissions;
      })
      .catch((data) => {
        errors.value = data.errors;
      });
}
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