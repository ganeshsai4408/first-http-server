const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url}new request made\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case '/':res.end("hello server");
            break
            case '/about':res.end("ganesh");
            break
            case '/home':res.end("this is home page");

        }
        
    })
   

   
}) ;
myserver.listen(8000, ()=> console.log("server has started"));