<script setup>
definePageMeta({
  middleware: 'auth'
});

const baseUrl = 'http://localhost:8000';
const processing = ref(false);
const users = ref([]);
const axios = useNuxtApp().$axios;
const {user, userPermissions} = storeToRefs(useAuthStore());

const listUsers = async () => {
  await axios.get(baseUrl+'/api/users').
  then(({data}) => {
    users.value = data.data;
  }).finally(() => {
    processing.value = false;
  });
}

const createUser = async () => {

}

const updateUser = async () => {

}

const deleteUser = async (id) => {
  await axios.delete(baseUrl+'/api/users/'+id).
  then(({data}) => {
    listUsers();
  }).catch(({response: {data}}) => {
    console.log(data.message)
  }).finally(() => {
    processing.value = false;
  });
}

onMounted(async () => await listUsers());

</script>

<template>
  <div class="p-4">
    <UserTable :users="users" @delete="deleteUser"/>
  </div>
</template>

<style scoped>

</style>