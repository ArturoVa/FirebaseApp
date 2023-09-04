<script setup lang="ts">
import {ref} from 'vue';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '@/firebase'
import router from '@/router';

const isLoginShown = ref(true);
const email = ref('');
const password=ref('');
async function login(){
  try{
  const loginRequest = await signInWithEmailAndPassword(auth,email.value,password.value)
  router.push('/tareas')
  }catch(error){
    alert(error)
  }
}
async function signUp(){
  try{
    const signUpRequest = await createUserWithEmailAndPassword(auth, email.value, password.value);
    isLoginShown.value=true
  }catch(error){
    alert(error)
  }
  
}
</script>

<template>
  
  <div v-if="isLoginShown">
  <h1>Login</h1>
  <div class="credentials-container">
    <label for="email">Email</label>
    <input v-model='email' type="email" />
    <label for="password">Contraseña</label>
    <input v-model="password" type="password" />
  
  </div>
  <button @click="login">Iniciar Sesion</button>
  <button @click="isLoginShown=false">Registrar</button>
  </div>
  <div v-else>
    <h1>Registrar</h1>
    <div class="credentials-container">
      <label for="email">Email</label>
      <input v-model="email" type="email" />
      <label for="password">Contraseña</label>
      <input v-model="password" type="password" />
    
    </div>
    <button @click="isLoginShown=true">Cancelar</button>
    <button @click="signUp">Registrar</button>
    </div>
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
