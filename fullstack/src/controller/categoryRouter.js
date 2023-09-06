let express = require('express');
let categoryRouter = express.Router();
let {getData} = require('./dbContoller');

function router(menu){
    
    categoryRouter.route('/')
        .get(async (req,res) => {
        let query = {}
        let data = await getData('category',query)
        res.render('category',{title:'Category Page',data:data,menu})
    })


    categoryRouter.route('/details')
        .get((req,res) => {
        res.send('Category Details')
    })

    return categoryRouter
}



module.exports = router
