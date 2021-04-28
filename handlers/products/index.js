const allProducts = require('./Product')
console.log(allProducts)
module.exports = {
    get:{
        products(req, res){
            res.render('products/products.hbs', {
                isLoggedIn: req.user !== undefined,
                userMail: req.user ? req.user.email : '',
                products: allProducts
            })
        },
        // offerTripp(req, res, next){
        //     res.render('tripp/offer-tripp.hbs', {
        //         isLoggedIn: req.user !== undefined,
        //         userMail: req.user ? req.user.email : ''
        //     })
        // }
    },
}