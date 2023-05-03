const http = require('http');
const map = require('through2-map')
const port = process.argv[2]


const server = http.createServer((req, res)=>{
    // we can check the req object for the request type 
    if(req.method === 'POST'){
    // we write a response heder to indicate sucess and what to expect
    // in the response 
        res.writeHead(200,{"content-type": "text/plain"});
    /**again, we use the fact that req and res objs are 
     * node stream objs and we can pipe data from the req to the response
     * we use the map utlity to map each byte of the req obj stream to the 
     * uppercase equivalent
     */
        req.pipe(map((chunck)=>{
            return chunck.toString().toUpperCase()
        })).pipe(res);
    }
})

server.listen(port)