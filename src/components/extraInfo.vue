<template>
    <div style="color:chocolate">
        Dato Extra: {{ extra }}
    </div>
</template>
<script>
import { inject } from 'vue'
export default {

    setup() {
        const extra = inject('extra')


        setTimeout(() => {
            //se puede pero no es recomendable
            //es mejor en el componente padre
            extra.value = 'Dato cambio'
        }, 2000)
        return {
            extra
        }
    }

}

</script>