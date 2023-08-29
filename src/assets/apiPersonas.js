const personas = [
    { nombre: 'Juan', edad: 25, sexo: 'M', telefono: '1234567890', mail: 'juan@mail.com' },
    { nombre: 'Ana', edad: 20, sexo: 'F', telefono: '0987654321', mail: 'ana@mail.com' },
    { nombre: 'Pedro', edad: 30, sexo: 'M', telefono: '1234509876', mail: 'pedro@mail.com' },
    { nombre: 'Maria', edad: 35, sexo: 'F', telefono: '6789054321', mail: 'maria@mail.com' },
    { nombre: 'Luis', edad: 40, sexo: 'M', telefono: '1234567890', mail: 'luis@mail.com' },
    { nombre: 'Carlos', edad: 45, sexo: 'M', telefono: '0987654321', mail: 'carlos@mail.com' }
]


export default function getInvitados(name) {
    return personas.filter(persona => {
        return persona.nombre.toLowerCase().match(name.toLowerCase());
    });
}