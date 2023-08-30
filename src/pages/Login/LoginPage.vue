<script setup lang="ts"></script>

<template>
  <h1>Login</h1>
  <div class="credentials-container">
    <label for="email">Email</label>
    <input type="email" />
    <label for="password">Contraseña</label>
    <input type="password" />
  </div>
  <button>Continuar</button>
</template>

<style scoped>
h1 {
  text-align: center;
}
.credentials-container {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  width: 20%;
  max-width: 1200px;
  background-color: whitesmoke;
  border: 0.5px solid gray;
  border-radius: 10px;
}
label,
input {
  margin-left: 10px;
}
button {
  margin: 20px auto;
  display: block;
  padding: 10px 15px;
  font-size: 15px;
  border: none;
  border-radius: 15px;
}
</style>
