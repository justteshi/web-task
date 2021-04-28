module.exports = {
    get: {
        home(req, res) {
            //console.log(req.user)
            res.render('home/home.hbs', {
                isLoggedIn: req.user !== undefined,
                userMail: req.user ? req.user.email : ''
            })
        }
    },
}