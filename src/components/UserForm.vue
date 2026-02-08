<script setup>
import { reactive, watch } from 'vue'

import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const props = defineProps({
  modelValue: Object,
  isEditing: Boolean
})

const emit = defineEmits(['submit'])

const form = reactive({ ...props.modelValue })

watch(() => props.modelValue, (val) => {
  Object.assign(form, val)
})

const submitForm = () => {
  emit('submit', { ...form })
}
</script>

<template>
  <Card class="mb-4">
    <template #title>
      {{ isEditing ? 'Editar usuario' : 'Nuevo usuario' }}
    </template>

    <template #content>
      <div class="p-fluid flex flex-col gap-3">
        <InputText v-model="form.name" placeholder="Nombre" />
        <InputText v-model="form.username" placeholder="Username" />
        <InputText v-model="form.email" placeholder="Email" />
        <InputText v-model="form.phone" placeholder="Teléfono" />

        <Button
          :label="isEditing ? 'Guardar cambios' : 'Agregar'"
          class="mt-2"
          @click="submitForm"
        />
      </div>
    </template>
  </Card>
</template>