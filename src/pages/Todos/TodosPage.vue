<style>
nav{
    display:flex;
    background-color:whitesmoke;
    padding-block:15px 10px;
    justify-content: space-between;
}
h3{
    margin:0;
}


</style>
<template>
    
    <div>
        <nav>
            <h3>Todos</h3>
            <button @click="signOutUser">Cerrar Sesion</button>
        </nav>

    </div>
</template>


<script setup lang="ts">
import {signOut} from 'firebase/auth';
import {auth} from '@/firebase';
async function signOutUser() {
    await signOut(auth  );
    
}

</script>