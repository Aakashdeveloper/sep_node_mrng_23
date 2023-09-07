let express = require('express');
let productRouter = express.Router();
let {getData} = require('./dbContoller');
let mongo = require('mongodb')

function router(menu){

    productRouter.route('/')
        .get(async (req,res) => {
        // res.send(Products)
        let query = {}
        let Products = await getData('products',query)
        res.render('products',{title:'Products Page',Products,menu})
        })

    productRouter.route('/category/:id')
        .get(async(req,res) => {
            //let id = req.params.id
            let {id} = req.params;
            let query = {"category_id":Number(id)}
            let Products = await getData('products',query)
            res.render('products',{title:'Products Page',Products,menu})
        })

    productRouter.route('/details/:id')
        .get(async(req,res) => {
            let _id = req.params.id
            let query = {"_id":mongo.ObjectId(_id)};
            let Products = await getData('products',query)
            res.render('products',{title:'Products Page',Products,menu})
        })

    return productRouter

}

module.exports = router