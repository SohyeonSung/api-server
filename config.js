const production = {
    PORT :3000,
    DB:{
        host:"localhost",
        user:'root',
        database:'vue',
        password:'1012',
        port:"3306",
        connectionLimit:20,
        connectTimeout: 5000,
    },
}
const development = {
    PORT :4000,
    DB:{
        host:"localhost",
        user:'root',
        database:'vue',
        password:'1012',
        port:"3306",
        connectionLimit:20,
        connectTimeout: 5000,
    },
}

module.exports = { production, development}