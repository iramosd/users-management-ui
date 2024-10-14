<script setup>
const props = defineProps({
  users:  {
    type: Array,
    required: true
  },
});

const { userPermissions } = storeToRefs(useAuthStore());

</script>

<template>
  <!-- BEGIN NEW USER BOTON -->
  <div v-if="userPermissions.find(permission => permission === 'create-user')" @click="$emit('create')" class="row mb-4">
    <div class="col-1 offset-11">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#198754" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
      </svg>
    </div>
  </div>
  <!-- BEGIN NEW USER BOTON -->

  <!-- BEGIN USER TABLE -->
  <table class="table table-light table-striped table-hover">
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre(s)</th>
      <th scope="col">Apellido(s)</th>
      <th scope="col">Correo</th>
      <th scope="col">Rol</th>
      <th scope="col">Fecha de registro</th>
      <th scope="col">Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user in props.users">
      <th scope="row">{{user.id}}</th>
      <td>{{user.first_name}}</td>
      <td>{{user.last_name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.rol_name}}</td>
      <td>{{user.created_at}}</td>
      <td>
        <div class="row">
          <div class="col-4 offset-4">
            <svg v-if="userPermissions.find(permission => permission === 'update-user')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d61fd" class="bi bi-pen-fill" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
            </svg>
          </div>
          <div class="col-4">
            <a @click="$emit('delete', user.id)">
              <svg v-if="userPermissions.find(permission => permission === 'delete-user')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
              </svg>
            </a>
          </div>
        </div>

      </td>
    </tr>
    </tbody>
  </table>
  <!-- END TABLE -->

  <!-- BEGIN PAGINATION -->
  <div class="row">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- END PAGINATION -->
</template>

<style scoped>

</style>