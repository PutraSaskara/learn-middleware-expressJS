const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

const routing = require('./route/post')

// app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

console.log('new request')


app.use('/', routing)

app.listen(4001)