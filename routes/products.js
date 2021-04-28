const router = require('express').Router()
const handler = require('../handlers/products')
const isAuth = require('../utils/isAuth')

router.get('/', isAuth(), handler.get.products)
// router.get('/offer-tripp', isAuth(), handler.get.offerTripp)


module.exports = router