const express = require('express')
const app = express()
const morgan = require('morgan')
var cors = require('cors')
require('dotenv').config()
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const db = require('./config/ConnectMongo')
const route = require('./routes')
db.connect()
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('combined'))
app.use(methodOverride('_method'))
app.use(cors())
route(app)
app.listen(3000, () => {
    console.log('App listening on port 3000!')
})
