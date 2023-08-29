


import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted, provide } from 'vue'//convierte valores primitivos a 

import getInvitados from '../assets/apiPersonas'

export default function control(props, context) {

    const name = ref('Vuejs3')
        const capacity = ref(100)
        let newInvitado = ref('')
        let searchInput = ref('')

        const guest = ref(['cmcuriqueo', 'claragonzalez', 'joseperez', 'mariajose', 'juanperez'])

        const persona = ref("")
        const title = ref(null)

        const extraInfo = ref('Dato inicial')

        provide('extra', extraInfo)

        setTimeout(() => {
            context.emit('eventotexto', 'Texto desde el hijo capacity.vue')
        }, 2000)

        onMounted(() => {
            console.log('onMounted')
            title.value.style.color = 'red'
        })

        //watchEffect es como un watch pero no se le pasa una variable
        //sino que se ejecuta cuando se ejecuta el componente
        watchEffect(() => {
            console.log('watchEffect')
            persona.value = getInvitados(searchInput.value)
        })



        const space = computed(() => {
            return capacity.value - guest.value.length
        })

        const myObject = reactive({
            nombre: 'Vuejs3',
            capacidad: 200,
            invitationes: ['cmcuriqueo', 'claragonzalez', 'joseperez', 'mariajose', 'juanperez'],
            espaciosDisponibles: computed(() => {
                return myObject.capacidad - myObject.invitationes.length
            })
        })

        setTimeout(() => {
            name.value = 'Vuejs3 - Curso'
            capacity.value = 200
        }, 2000)

        setTimeout(() => {
            myObject.nombre = 'Vuejs3 - Curso'
            myObject.capacidad = 200
            myObject.invitationes.push('joseperez')
        }, 4000)

        function addCapacity() {
            capacity.value++;
            myObject.capacidad++;
        }

        function addInvitation(invitado) {
            myObject.invitationes.push(invitado)
            newInvitado.value = ''
        }

        //watch(capacity, (newVal, oldVal) => {...

        watch([capacity, name, ()=>myObject.capacidad], (newVal, oldVal) => {
            console.log('New value ' + newVal)
            console.log('Old value ' + oldVal)
        })


        //puedo definirle un nombre a la variable que voy a retornar js6
        //aca al pasar capacidadObject se pasa el valor no el objeto el cual es el reactivo
        return {
            nombreRef:name,
            capacidadRef:capacity,
            myObject,
            nombreObject:myObject.nombre,
            capacidadObject:myObject.capacidad,
            newInvitado,
            guest,
            space,
            searchInput,
            ...toRefs(myObject),
            addCapacity,
            addInvitation,
            persona,
            title
        }
}