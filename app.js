/* =======================
    LOAD THE DEPENDENCIES
==========================*/
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const env = require('node-env-file');

/* =======================
    LOAD THE CONFIG
==========================*/
env(__dirname + "/env.cfg");
const port = process.env.PORT || 80

/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express()

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', process.env.secret)

// index page, just for testing
app.get('/', (req, res) => {
    res.send('Hello World7!')
})


// configure api router
app.use('/api', require('./routes/api'))

// open the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Express is running on port ${port}`)
})



/* =======================
    CONNECT TO MONGODB SERVER
==========================*/
mongoose.connect(process.env.mongodb)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error)
db.once('open', ()=>{
    console.log('connected to mongodb server')
})
