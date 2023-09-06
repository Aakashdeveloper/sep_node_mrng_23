let express = require('express');
let productRouter = express.Router();
let {getData} = require('./dbContoller');

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
            let id = req.params.id
            let query = {"category_id":Number(id)}
            let Products = await getData('products',query)
            res.render('products',{title:'Products Page',Products,menu})
        })

    productRouter.route('/details')
        .get((req,res) => {
            res.send('Products Details')
        })

    return productRouter

}

module.exports = router