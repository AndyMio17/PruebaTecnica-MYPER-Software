<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

defineProps({
  users: Array,
  loading: Boolean
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <DataTable
    :value="users"
    :loading="loading"
    paginator
    :rows="5"
    stripedRows
  >
    <Column field="id" header="ID" />
    <Column field="name" header="Nombre" />
    <Column field="username" header="Usuario" />
    <Column field="email" header="Email" />
    <Column field="phone" header="Teléfono" />

    <Column header="Acciones">
      <template #body="{ data }">
        <Button
          icon="pi pi-pencil"
          text
          @click="emit('edit', data)"
        />
        <Button
          icon="pi pi-trash"
          text
          severity="danger"
          @click="emit('delete', data.id)"
        />
      </template>
    </Column>
  </DataTable>
</template>
