const http = require('http');
const fs = require('fs');
const port = Number(4000)
const file = __dirname+"/docs/index.html"


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':"text/html"})
    /**we create a readable stream out of our file */
    const fileStream = fs.createReadStream(file)
    /** since the response obj is a node stream 
     * we can pipe the filestream to the response obj 
     * using the module methods
     */
    fileStream.pipe(res)
})

server.listen(port, ()=> console.log(`listening on ${port}`))