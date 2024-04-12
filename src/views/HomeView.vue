<script setup>
import NavBar from '@/components/NavBar.vue'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore();
console.log(store)
console.log(store.user);
</script>

<template>
  <main>
    <NavBar />
    <div class="hero min-h-screen pt-20 px-8">
      <h2 v-text="store.user"></h2>
    </div>
  </main>
</template>

<style scoped>
</style>
