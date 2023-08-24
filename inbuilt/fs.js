let fs = require('fs');

// fs.writeFile('myFile.txt','My Next Time file for Fs',function(){
//     console.log('File Created')
// })

// fs.appendFile('myCode.txt','This is line number \n',function(){
//     console.log('File Appneded')
// })

// fs.readFile('data1.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('myCode.txt','newFile.txt',function(err){
//     if(err) throw err
//     console.log('File Renamed')
// })

fs.unlink('myFile.txt',function(err){
    if(err) throw err
    console.log('File Deleted')
})