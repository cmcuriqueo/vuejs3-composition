<script>
import CapacityComponent from './components/Capacity.vue'
export default {
    components: {
        appCapacity:CapacityComponent
    },

    data() {
        return {
            texto: 'Texto desde el padre app.vue'
        }
    }
}

</script>

<template>

    <p>{{ texto }}</p>
    <hr>
    <app-capacity @eventotexto="texto = $event"></app-capacity>
</template>