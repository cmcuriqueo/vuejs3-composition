import { ref } from 'vue'


export default function numeroAleatoreo() {
    const numero = ref(0)

    function  crearNumero() {
        numero.value = Math.floor(Math.random() * 100)
    }

    return {
        numero,
        crearNumero
    }
}