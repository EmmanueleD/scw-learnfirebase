<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit" style="display: flex; flex-direction:column">
      <input type="email" placeholder="email..." v-model.trim="email">
      <input type="password" placeholder="password..." v-model="password">
      <button :disabeld="usersStore.loadingUser" type="submit">{{ buttonLabel }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useUsersStore } from '../stores/users';
// import { useRouter } from 'vue-router';

const usersStore = useUsersStore()
// const router = useRouter()

const buttonLabel = computed(() => {
  return usersStore.loadingUser ? 'loading...' : 'Login'
})

const email = ref('emmanuele.online@gmail.com')
const password = ref('qwerty')

async function handleSubmit() {
  if (!email.value || password.value.length < 6) {
    return alert('please fill the form correctly')
  }
  await usersStore.loginUser(email.value, password.value)
  // router.push('/')
}
</script>