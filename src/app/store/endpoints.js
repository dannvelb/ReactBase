
const prod = false;

export const hosts = {
    client: prod ? "http://69.55.62.32:8080/api/cliente" : "http://localhost:5000",
    user: prod ? "http://69.55.62.32:8080/api/user" : "http://localhost:5001",
    strapi: prod ? "http://localhost:1337": "http://localhost:1337"
}


export default  {
    auth: {
        searchClient: `${hosts.client}`,
        login: `${hosts.user}/auth-user`
    },
    superAdmin: {

    },
    admin: {
        user: `${hosts.user}`
    },
    strapi: {
        cliente: `${hosts.strapi}/clientes`
    }
}