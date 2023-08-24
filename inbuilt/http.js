let http = require('http');


//req > what we send to server (params,queryarams,body)
//res > waht we will get from server

let server = http.createServer(function(req, res){
    res.write('<h1>Hiii From Node Server Code</h1>');
    res.end()
})

server.listen(7655)