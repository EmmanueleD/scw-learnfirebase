<template>
  <div>
    <h1>Home</h1>
    <h4>Welcome</h4>
    <p>{{ usersStore.userData?.email }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from '../stores/users';
const usersStore = useUsersStore()
</script>
