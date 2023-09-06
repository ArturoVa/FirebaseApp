<script setup lang="ts">
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
async function signOutUser() {
  await signOut(auth)
}
</script>

<template>
  <nav>
    <h3>MyTodos</h3>
    <button @click="signOutUser">Cerrar Sesion</button>
  </nav>
</template>

<style scoped>
:root{
  --eerie-black: #262522ff;
  --onyx: #333737ff;
  --cerulean: #457989ff;
  --jet: #2C2D2Bff;
  --cadet-gray: #88B0BCff;
}
nav {
  display: flex;
  padding: 15px 10px;
  background-color: #457989ff;
  justify-content: space-between;
}
h3 {
  margin: 0;
}
</style>