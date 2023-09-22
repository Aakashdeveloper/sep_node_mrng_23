let express = require('express');
let app = express();
let mongo = require('mongodb');
let dotenv = require('dotenv');
dotenv.config()
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT || 3000;
let {dbConnect,getData} = require('./controller/dbController');


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//hear beat
app.get('/',(req,res) =>{
    res.send('Health Ok')
})

//list all city
app.get('/location',async(req,res) => {
    let query = {};
    let collection = 'location';
    let output = await getData(collection,query)
    res.status(200).send(output)
})

// list of restaurants
app.get('/restaurants',async(req,res) => {
    let query = {};
    let stateId = Number(req.query.stateId)
    let mealId = Number(req.query.mealId)
    if(stateId && mealId){
        query = { 
            "state_id":stateId,
            "mealTypes.mealtype_id":mealId
        }
    }else if(stateId){
        query = { 
            "state_id":stateId
        }
    }else if(mealId){
        query={
            "mealTypes.mealtype_id":mealId
        }
    }
    let collection = 'restaurants';
    let output = await getData(collection,query)
    res.status(200).send(output)
})

// list of mealType
app.get('/mealType',async(req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query)
    res.status(200).send(output)
})

//filters
app.get('/filters/:mealId',async(req,res) => {
    let query = {};
    let collection = 'restaurants';
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let hcost = Number(req.query.hcost);
    let lcost = Number(req.query.lcost);
    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(hcost && lcost){
        query = {
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    let output = await getData(collection,query)
    res.status(200).send(output)
})


app.listen(port,() => {
    dbConnect();
    console.log(`Running on port ${port}`)
})