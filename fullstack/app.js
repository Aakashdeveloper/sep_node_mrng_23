let express = require('express');
let app = express();
let port = 8120;
let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');


//static file path
app.use(express.static(__dirname + '/public'))
//ejs file path
app.set('views','./src/views');
//view engine name
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send('<h1>Hii From Express</h1>')
    res.render('index',{title:'Node App',test:'code'})
})

app.use('/category',categoryRouter);
app.use('/products',productRouter);

//creating server
app.listen(port,function(err){
    if(err) throw err;
    console.log(`server listening to port ${port}`)
})