<style>
nav{
    display:flex;
    background-color:whitesmoke;
    padding-block:15px 10px;
    justify-content: end;
}

</style>
<template>
    
    <div>
        <nav>
            <button>Cerrar Sesion</button>
        </nav>

    </div>
</template>


<script setup lang="ts">
import {signOut} from 'firebase/auth';
</script>