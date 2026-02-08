<script setup>


import { ref, onMounted } from 'vue'
import axios from 'axios'


import UserTablePv from '@/components/UserTable.vue'
import UserFormPv from '@/components/UserForm.vue'

const users = ref([])
const loading = ref(false)

const isEditing = ref(false)
const editingId = ref(null)

const form = ref({
  name: '',
  username: '',
  email: '',
  phone: ''
})

  const fetchUsers = async () => {
    loading.value = true
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      users.value = data
    } finally {
      loading.value = false
    }
  }

const saveUser = (data) => {
  if (isEditing.value) {
    const index = users.value.findIndex(u => u.id === editingId.value)
    users.value[index] = { id: editingId.value, ...data }
    isEditing.value = false
    editingId.value = null
  } else {
    const newId = Math.max(...users.value.map(u => u.id)) + 1
    users.value.push({ id: newId, ...data })
  }

  form.value = { name: '', username: '', email: '', phone: '' }
}

const editUser = (user) => {
  isEditing.value = true
  editingId.value = user.id
  form.value = { ...user }
}

const deleteUser = (id) => {
  users.value = users.value.filter(u => u.id !== id)
}

onMounted(fetchUsers)

</script>

<template>

  <div class="p-4">

    <UserFormPv
      :model-value="form"
      :is-editing="isEditing"
      @submit="saveUser"
    />

    <UserTablePv
      :users="users"
      :loading="loading"
      @edit="editUser"
      @delete="deleteUser"
    />
  </div>

</template>