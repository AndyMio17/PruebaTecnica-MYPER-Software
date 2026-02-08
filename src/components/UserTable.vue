<script setup>
defineProps({
  users: Array,
  loading: Boolean
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <DataTable-pv
    :value="users"
    :loading="loading"
    paginator
    :rows="5"
    stripedRows
  >
    <Column-pv field="id" header="ID" />
    <Column-pv field="name" header="Nombre" />
    <Column-pv field="username" header="Usuario" />
    <Column-pv field="email" header="Email" />
    <Column-pv field="phone" header="Teléfono" />

    <Column-pv header="Acciones">
      <template #body="{ data }">
        <Button-pv
          icon="pi pi-pencil"
          text
          @click="emit('edit', data)"
        />
        <Button-pv
          icon="pi pi-trash"
          text
          severity="danger"
          @click="emit('delete', data.id)"
        />
      </template>
    </Column-pv>
  </DataTable-pv>
</template>
