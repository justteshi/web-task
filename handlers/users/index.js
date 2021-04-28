const User = require('./User')
const jwt = require('../../utils/jwt')
const { cookie } = require('../../config/config')

module.exports = {
    get: {
        login(req, res){
            res.render('partials/login.hbs')
        },
        register(req, res){
            res.render('partials/register.hbs')
        },
        logout(req, res){
            req.user = null
            res.clearCookie(cookie).redirect('/')
        }
    },

    post: {
        login(req, res, next){
            const { email, password } = req.body

            User.findOne({ email }).then((user) => { 
                return Promise.all([user.passwordsMatch(password), user])
            }).then(([match, user]) => {
                if(!match) {
                    next(err) //Add validator
                    return
                }
                const token = jwt.createToken(user)

                res.status(201).cookie(cookie, token, { maxAge: 3600000 }).redirect('/')

            }).catch((error) => {
                console.log(error)
            })

        },
        register(req, res, next){
            const { email, password, rePassword} = req.body
            User.create({ email, password }).then((createdUser) => {
                console.log(createdUser)
                res.redirect('/user/login')
            })
        }

    }
}