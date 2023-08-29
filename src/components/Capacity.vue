<template>
    <div>


        {{ numero }}
        <button @click="crearNumero">Crear</button>
        <hr>

        <app-datos-evento :nombre="nombreRef" :capacidad="capacidadRef" :space="space"></app-datos-evento>
        <ul>
            <li v-for="(item, index) in guest" :key="index + '_guest'">{{ item }}</li>
        </ul>
        <button @click="addCapacity">Add Capacity</button>
        <hr>
        <input type="text" v-model="newInvitado" placeholder="invitado">
        <button v-if="newInvitado != ''" @click="addInvitation(newInvitado)">Add Invitado</button>
        <hr>
        <app-datos-evento :nombre="nombreObject" :capacidad="capacidadObject" :space="espaciosDisponibles"></app-datos-evento>


        <hr>
        <h5  ref="title">Invitados</h5>
        <ul>
            <li v-for="(item, index) in myObject.invitationes" :key="index">{{ item }}</li>
        </ul>
        <hr>
        <!-- esto viene del toRefs ...toRefs(myObject) -->
        <h5>Nombre del evento: {{ nombre }}</h5>
        <p>capacidad: {{capacidad }}</p>

        <hr>

        <input type="text" v-model="searchInput" placeholder="buscar invitado">
        <h5>Persona: {{ persona }}</h5>
    </div>
</template>
<script>
import control from '../use/control.js'
import numeroAleatorio from '../use/numeroAleatorio.js'

import datosEvento from './datosEvento.vue'
export default {
    name: 'CapacityComponent',

    //beforeCreate y created se ejecutan al mismo tiempo que el setup
    //asi que cualquier cosa que se haga en el created se puede hacer en el setup
    components: {
        appDatosEvento:datosEvento
    },
    setup(props, context) {

        const { numero, crearNumero } = numeroAleatorio()
        
        //asi devulevo varias funciones sino seria solo return control(props, context)
        return {...control(props, context), numero, crearNumero}
    }
    
    //onRenderTracked //ejecuta una funcion por cada una de las dependencias reactivas
    //mounted -> onMounted
    //beforeUpdate -> onBeforeUpdate
    //updated -> onUpdated
    //beforeDestroy -> onBeforeUnmount
    //destroyed -> onUnmounted
    //errorCaptured -> onErrorCaptured
    //activated -> onActivated //si un componente se activa
    //deactivated -> onDeactivated //si un componente se desactiva
}

</script>