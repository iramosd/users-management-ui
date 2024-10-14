<script setup>
definePageMeta({
  middleware: 'auth'
});

const baseUrl = 'http://localhost:8000';
const processing = ref(false);
const { users } = storeToRefs(useUserStore());
const userForm = ref({});
const isShow = ref(false);
const isUpdateForm = ref(false);

const axios = useNuxtApp().$axios;

const listUsers = async () => {
  processing.value = true;
  await axios.get(baseUrl+'/api/users').
  then(({data}) => {
    users.value = data.data;
  }).finally(() => {
    processing.value = false;
  });
}

const createUser = async () => {
  processing.value = true;
  await axios.post(baseUrl+'/api/users', userForm.value)
      .then(({data}) => {
        userForm.value = {};
        listUsers();
      }).catch((data) => {
        console.log(data.message)
      }).finally(() => {
        processing.value = false;
        isShow.value = false;
      })
}

const loadUserData = async (user) => {
  userForm.value.first_name = user.first_name;
  userForm.value.last_name = user.last_name;
  userForm.value.email = user.email;
  userForm.value.password = user.password;
  userForm.value.password_confirmation = user.password;
  userForm.value.role = user.rol_name;

  isUpdateForm.value = true;
  isShow.value = true;
}

const updateUser = async () => {
  processing.value = true;
  await axios.update(baseUrl+'/api/users', userForm.value)
      .then(({data}) => {
        userForm.value = {};
        listUsers();
      }).catch((data) => {
        console.log(data.message)
      }).finally(() => {
        processing.value = false;
        isShow.value = false;
        isUpdateForm.value = false;
      })
}

const deleteUser = async (id) => {
  await axios.delete(baseUrl+'/api/users/'+id).
  then(() => {
    listUsers();
  }).catch((data) => {
    console.log(data)
  }).finally(() => {
    processing.value = false;
  });
}

onMounted(async () => await listUsers());

</script>

<template>
  <Modal :show="isShow" @close="() => isShow = false">
    <h1 class="fs-3 fw-bolder">Registrar usuario</h1>
    <form @submit.prevent="createUser">
      <div class="mb-12 row my-4">
        <label for="first_name" class="col-sm-4 col-form-label fs-5 fw-bolder">Nombre(s)</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="first_name" v-model.trim="userForm.first_name">
        </div>
      </div>
      <div class="mb-12 row my-4">
        <label for="last_name" class="col-sm-4 col-form-label fs-5 fw-bolder">Apellido(s)</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="last_name" v-model.trim="userForm.last_name">
        </div>
      </div>
      <div class="mb-12 row my-4">
        <label for="email" class="col-sm-4 col-form-label fs-5 fw-bolder">Correo</label>
        <div class="col-sm-8">
          <input type="text" class="form-control" id="email" v-model.trim="userForm.email">
        </div>
      </div>
      <div class="mb-12 row my-4">
        <label for="password" class="col-sm-4 col-form-label fs-5 fw-bolder">Contraseña</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="password" v-model.trim="userForm.password" :readonly="isUpdateForm" :disabled="isUpdateForm">
        </div>
      </div>
      <div class="mb-12 row my-4">
        <label for="password_confirmation" class="col-sm-4 col-form-label fs-5 fw-bolder">Confirmar contraseña</label>
        <div class="col-sm-8">
          <input type="password" class="form-control" id="password_confirmation" v-model.trim="userForm.password_confirmation" :readonly="isUpdateForm" :disabled="isUpdateForm">
        </div>
      </div>
      <div class="mb-12 row my-4">
        <label for="rol" class="col-sm-4 col-form-label fs-5 fw-bolder">Rol</label>
        <div class="col-sm-8">
          <select class="form-select" v-model.trim="userForm.role">
            <option selected value="administrador">administrador</option>
            <option value="revisor">revisor</option>
          </select>
        </div>
      </div>
      <div class="mb-12 row my-4">
        <div class="col-sm-6">
          <button type="submit" class="btn btn-secondary">Ingresar</button>
        </div>
      </div>
    </form>
  </Modal>

  <div class="p-4">
    <UserTable :users="users" @delete="deleteUser" @create="() => isShow = true" @update="loadUserData"/>
  </div>
</template>

<style scoped>

</style>