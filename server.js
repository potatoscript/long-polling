const http = require("http")
const fs = require("fs")

const pool = []
function handlePoll(req,res){
    pool.push(res)
}
function handlePage(req,res){
    fs.createReadStream(__dirname+"/client.html").pipe(res)
}

function emitMessage(message){
    for(let res of pool) res.end(message)
    pool.length = 0
}

function handleMessage(req,res){
    let message = ""
    req.on("data",(chunk)=>{
        message += chunk
    })
    req.on("end",()=>{
        emitMessage(message);
        res.end();
    })
}

// create router
http.createServer((req,res)=>{
    let method = req.method;
    let url =req.url;
    if(method==="GET"){
        if(url==="/page")handlePage(req,res);
        else if(url==="/poll")handlePoll(req,res);
    }else if(method==="POST" && url ==="/message")handleMessage(req,res);
    else req.end();
})
.listen(5001)
.on("listening",()=>{
    console.log("I am listening on port 5001");
})