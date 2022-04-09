const IS_USER_AUTH = "isUserAuth"
const USER_TYPE = "userType"

const USER_TYPES = {
    0: {
        name: 'Super Usuario',
        key:'sudo',
        id: 0
    },
    1: {
        name: 'Administrador',
        id: 1,
        key:'',
    },
    2: {
        name: 'Maestro',
        id: 2
    },
    3: {
        name: 'Alumno',
        id: 3
    }
}



export {
    IS_USER_AUTH,
    USER_TYPE,
    USER_TYPES
}