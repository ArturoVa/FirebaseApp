<script setup lang="ts">
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {db} from "@/firebase";
import {ref,onMounted} from "vue";
import {useRoute} from "vue-router"; //
import router from "@/router"

const route = useRoute()
const todo =ref({
    title:'',
    description:'',
    priority:0,
    status:'',
    expires_at: new Date()
})


async function getTodo(){
    const docRef = doc(db,"todos", route.params.id as string)
    const docSnapshot = await getDoc(docRef);
    if(docSnapshot.exists()){
        //Asignar tarea a una variable
        todo.value=docSnapshot.data();
    }
}
function goToTodosPage(){
    router.push('/todos')
}
async function completeTodo(){
    //Status => 'completed'
    const docRef = doc(db,"todos", route.params.id as string)
    await updateDoc(docRef,{
        status:'completed'
    })
}
onMounted(()=>{
    getTodo();
})

</script>

<template>
    <div>
        <h3>Titulo: {{ todo.title }}</h3>
        <p>Descripcion: {{ todo.description }}</p>
        <p>Fecha de expiracion: {{ todo.expires_at}}</p>
        <p><strong>Prioridad: </strong> {{ todo.priority}}</p>
        <p><strong>Estatus de la tarea: </strong> {{ todo.status }}</p>
    </div>
    <div>
        <button @click="completeTodo()">Completar</button>
        <button @click="goToTodosPage()">Salir de las tareas</button>
        <button>Borrar</button>
    </div>
</template>

<style scoped>

</style>