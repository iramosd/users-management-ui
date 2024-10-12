<script setup lang="ts">

</script>

<template>
  <div class="text-bg-primary p-3 fs-1 fw-bolder">Bienvenido usuario</div>

  <div class="container m-auto text-center m-lg-5">
    <div class="row">
      <div class="col-1">
      </div>
      <div class="col-10">
        <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <slot/>
        </div>
      </div>
      <div class="col-1">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>