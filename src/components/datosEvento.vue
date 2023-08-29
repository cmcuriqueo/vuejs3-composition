<template>
    <div>

        <h5 ref="title">Nombre del evento: {{ nombre }}</h5>
        <p>capacidad: {{ capacidad }}</p>
        <p>espacios disponibles: {{ space }}</p>
        <p> capacidad + espacios: {{ suma }}</p>

        <hr>
        <app-extra-info></app-extra-info>

    </div>
</template>

<script>
import { computed }from 'vue'
import extraInfo from './extraInfo.vue'
export default  {
    props:['nombre', 'capacidad', 'space'],
    components: {
        appExtraInfo:extraInfo
    },

    setup(props) {
        const suma = computed(() => {
            return props.capacidad + props.space
        })
        return {
            suma
        }
    }

    // computed: {

    //     suma() {
    //         return this.capacidad + this.space
    //     }

    // }
    
}

</script>