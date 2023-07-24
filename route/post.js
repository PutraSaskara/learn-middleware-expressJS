const express = require('express')
const route = express.Router()

const routeUser = require('../controller/routeUser')


route.get('/', routeUser.home)
route.get('/user', routeUser.user)
route.get('/request',routeUser.request )
route.get('/print', routeUser.print)
route.get('/add', routeUser.add)
route.get('/add-post', routeUser.reqGet)
route.post('/add-post', routeUser.reqPost)



module.exports= route