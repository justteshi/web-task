const env = process.env.NODE_ENV || 'development'

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbUrl: 'mongodb+srv://user:pass@softuni.etcdp.mongodb.net/shared_tripps?retryWrites=true&w=majority',
        cookie: 'authId',
        secret: 'my-name-is-shady'
    },
    production: {}
}

module.exports = config[env]