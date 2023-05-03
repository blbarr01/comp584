const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2])
const file = process.argv[3]


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':"text/plain"})
    /**we create a readable stream out of our file */
    const fileStream = fs.createReadStream(file)
    /** since the response obj is a node stream 
     * we can pipe the filestream to the response obj 
     * using the module methods
     */
    fileStream.pipe(res)
})

server.listen(port)