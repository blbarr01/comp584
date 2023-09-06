const http = require('http');
const fs = require('fs');
const port = 8000
//create a server object:
http.createServer(function (req, res) {
    console.log("req url", req.url);
    console.log(__dirname);
    const url = req.url;
    
    switch (url) {
        case "/":
            res.writeHead(200,{'Content-Type': 'text/html'})
            fs.createReadStream(__dirname+"/pages/index.html").pipe(res)
            break;
        case "/about":
            res.writeHead(200,{'Content-Type': 'text/html'})
            fs.createReadStream(__dirname+"/pages/about.html").pipe(res)
            break;
        case "/contact":
            res.write('here\'s where you can reach us!'); //write a response to the client
            res.end()
            break;
        case "/data":
            try{
                res.writeHead(200,{'Content-Type': 'application/json'})
                fs.createReadStream(__dirname+"/pages/data.json").pipe(res)
            }catch(err){
                console.error(err);
            }   
            break;

        default:
            res.writeHead(200,{'Content-Type': 'text/html'})
            fs.createReadStream(__dirname+"/pages/404.html").pipe(res)
            break;
    }

}).listen(port, "127.0.0.1",() => console.log(`listening on port ${port} ${__dirname}`)); //the server object listens on port 8080