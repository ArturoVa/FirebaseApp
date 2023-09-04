<script setup lang="ts">
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted, ref } from 'vue'
import Navbar from "@/components/Navbar.vue"

const todos = ref()



async function getTodos() {
  const collectionRef = collection(db, 'todos')
  const todosSnapshot = await getDocs(collectionRef)
  todos.value = todosSnapshot.docs.map((doc) => {
    return {
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      expires_at: doc.data().expires_at,
      priority: doc.data().priority
    }
  })
}

onMounted(() => {
  getTodos() // Get Todos when the page loads for first time or after refreshing it
})
</script>

<template>
  <Navbar/>
  <h2>Mi lista de tareas</h2>
  <button class="create-btn">Crear una nueva tarea</button>
  <div class="todos-container">
    <div class="todo-item" v-for="todo in todos">
        <div class="complete">
        <!--Boton de completado-->
        <button>Check</button>
        </div>
        <div class="info">
            <h5>{{todo.title}}</h5>
            <p>{{todo.expires_at.toDate().toLocaleDateString()}}</p> <!--Cambiamos el formato de la fecha-->
        <!--Titulo y fecha del todo-->
        </div>
    </div>
  </div>
</template>

<style scoped>
h2{
    text-align:center;
}
.create-btn{
    cursor:pointer;
    float: right;
    padding:5px 10px;
    border-radius:10px;
    border:0;
    background-color:blue;
    color:white;
    
}
.todos-container{
    margin:60px auto;
    width:800px;
    background-color:whitesmoke;
    min-height:400px;
    overflow:auto;
    border:1px solid gray;
    border-radius:20px;
}
.todo-item {
    margin: auto;
    background-color: white;
    border: 1px solid gray;
    border-radius: 10px;
    width: 80%;
    display: flex;
    align-items: center;
}
.complete{
    width:30%;
}
.info{
    width:70%;
}
</style>