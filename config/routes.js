const router = require('../routes/index')

module.exports = (app) => {
    app.use('/', router.home)

    app.use('/user', router.users)

    app.use('/products', router.products)

    app.get('*', function(req, res){
        res.render('404.hbs')
      });
}