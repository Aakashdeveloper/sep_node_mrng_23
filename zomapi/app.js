let express = require('express');
let app = express();
let mongo = require('mongodb');
let dotenv = require('dotenv');
dotenv.config()
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())