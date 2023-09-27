let express = require('express');
let app = express();
const {ObjectId} = require('mongodb');
let dotenv = require('dotenv');
dotenv.config()
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT || 3000;
let {dbConnect,getData,getDataSort,
    getDataSortLimit} = require('./controller/dbController');


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
    let sort = {cost:1};
    let skip = 0;
    let limit = 10000000000000;
    if(req.query.sort){
        sort={cost:req.query.sort}
    }

    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip)
        limit = Number(req.query.limit)
    }

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
    }else{
        query={
            "mealTypes.mealtype_id":mealId
        }
    }
    let output = await getDataSortLimit(collection,query,sort,skip,limit)
    res.status(200).send(output)
})

// restaurants details
app.get('/details/:id', async(req,res) => {
    // let id = Number(req.params.id);
    // let query = {"restaurant_id":id};
    const validObjId = (id) => {
        const idPattern = /^[0-9a-fA-F]{24}$/
        return idPattern.test(id)
    }
    if(validObjId(req.params.id)){
        let collection = 'restaurants';
        let query = {_id:new ObjectId(req.params.id)}
        let output = await getData(collection,query);
        res.status(200).send(output)
    }else{
        res.send('Invalid Object id')
    }
})


app.listen(port,() => {
    dbConnect();
    console.log(`Running on port ${port}`)
})