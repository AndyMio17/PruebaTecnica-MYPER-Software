<script setup>

const menu = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'Usuarios',
    icon: 'pi pi-users',
    to: '/users'
  }
]
</script>

<template>
<div class="flex align-items-center justify-content-between p-3">
  <h1 class="m-0">CRUD Usuarios (PrimeVue)</h1>

  <nav>
    <RouterLink to="/" class="flex-1 h-4rem bg-primary font-bold text-center p-3 border-round mx-2">Home</RouterLink> 
    <RouterLink to="/users" class="flex-1 h-4rem bg-primary font-bold text-center p-3 border-round mx-2">Usuarios</RouterLink>
  </nav>
</div>

<RouterView />

</template>

<style scoped>

</style>
