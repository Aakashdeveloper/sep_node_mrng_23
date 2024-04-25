let express = require('express');
let app = express();
let port = 8120;
let {dbConnection} = require('./src/controller/dbContoller')

let menu = [
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]

let categoryRouter = require('./src/controller/categoryRouter')(menu);
let productRouter = require('./src/controller/productRouter')(menu);

//static file path
app.use(express.static(__dirname + '/public'))
//ejs file path
app.set('views','./src/views');
//view engine name
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send('<h1>Hii From Express</h1>')
    res.render('index',{title:'Home Page',menu})
})

app.use('/category',categoryRouter);
app.use('/products',productRouter);

//creating server
app.listen(port,function(err){
    if(err) throw err;
    dbConnection();
    console.log(`server listening to port ${port}`)
})
