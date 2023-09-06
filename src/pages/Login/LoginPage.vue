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
  router.push('/todos')
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

  <div class="body">
  <div id="background"></div>
  <div v-if="isLoginShown" class="centeredHolder">
  <div id="form">
  <h1>Login</h1>
  <div class="credentials-container">
    <div class="input-container">
      <label for="email">Email</label>
      <input v-model='email' type="email" />
    </div>
    <div class="input-container">
      <label for="password">Contraseña</label>
      <input v-model="password" type="password" />
    </div>
  </div>
    <div class="btn-container">
      <button class="login-btn" @click="login" type="button">Iniciar Sesión</button>
      <button class="register-btn" @click="isLoginShown = false" type="button">Registrarme</button>
    </div>
  </div>
  </div>
  <div v-else class="centeredHolder">
    <h1>Registro</h1>
    <div class="credentials-container">
      <p>Crea una nueva cuenta con correo y contraseña</p>
      <div class="input-container">
        <label for="email">Email: </label>
        <input v-model="email" type="email" />
      </div>
      <div class="input-container">
        <label for="password">Contraseña: </label>
        <input v-model="password" type="password" />
      </div>
    </div>
    <div class="btn-container">
      <button @click="isLoginShown = true" type="button">Cancelar</button>
      <button class="register-btn" @click="signUp" type="button">Registrame</button>
    </div>
  </div>
</div>
</template>

<style scoped>
:root{
  --eerie-black: #262522ff;
  --onyx: #333737ff;
  --cerulean: #457989ff;
  --jet: #2C2D2Bff;
  --cadet-gray: #88B0BCff;
}
h1 {
  text-align: center;
}

.credentials-container {
  margin: auto;
  width: 500px;
  
}

.credentials-container > div {
  width: 60%;
  margin: 15px auto;
}

input {
  padding: 7px 5px;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.519);
  background-color: rgba(57, 38, 38, 0.313);
  color: rgba(255, 255, 255, 0.692);
}
.centeredHolder{
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.519);
  background-color: rgba(57, 38, 38, 0.313);
  color: rgba(240, 248, 255, 0.822);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}
#form{
  background-color:rgba(57, 38, 38, 0.313) ;
  width: fit-content;
  border-radius: 10px;
}
.login-btn:hover {
  background-color: rgb(9, 64, 175);
  color: white;
}


.register-btn:hover {
  background-color: rgb(133, 133, 133);
  color: white;
}

.btn-container {
  margin: auto;
  width: max-content;
}

p {
  text-align: center;
}

.body{
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background-image: url('https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  
}
.input-container{
  display: flex;
  flex-direction: column;
}
</style>
