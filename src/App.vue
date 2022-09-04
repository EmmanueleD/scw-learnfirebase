<template>
  <div v-if="usersStore.loadingSession == false">
    app
    <nav>
      <router-link to="/" v-if="usersStore.userData">Home</router-link>
      <router-link to="/login" v-if="!usersStore.userData">Login</router-link>
      <router-link to="/register" v-if="!usersStore.userData">Register</router-link>
      <button @click="usersStore.logoutUser" v-if="usersStore.userData">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
  <div v-else>

    loading user...

  </div>
</template>

<script setup>
import { useUsersStore } from './stores/users';
const usersStore = useUsersStore()
</script>