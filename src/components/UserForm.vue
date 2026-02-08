<script setup>
import { reactive, watch } from 'vue'

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
  <Card-pv class="mb-4">
    <template #title>
      {{ isEditing ? 'Editar usuario' : 'Nuevo usuario' }}
    </template>

    <template #content>
      <div class="p-fluid flex flex-col gap-3">
        <InputText-pv v-model="form.name" placeholder="Nombre" />
        <InputText-pv v-model="form.username" placeholder="Username" />
        <InputText-pv v-model="form.email" placeholder="Email" />
        <InputText-pv v-model="form.phone" placeholder="Teléfono" />

        <Button-pv
          :label="isEditing ? 'Guardar cambios' : 'Agregar'"
          class="mt-2"
          @click="submitForm"
        />
      </div>
    </template>
  </Card-pv>
</template>