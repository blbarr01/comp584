const {createServer} = require('http');
const url = require('url')

// create an instance of a server. 
// in this case the server just return json 
const server = createServer((req, res)=>{
// we use obj destructuring to pull the path and query from the request
    const {query, pathname} = url.parse(req.url, true)
    const date = new Date(query.iso)
    
    res.writeHead(200, {"Content-Type": "application/json"})
    switch (pathname) {
        case '/api/parsetime':
            let timeObj = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
            res.end(JSON.stringify(timeObj))
            break;
        case "/api/unixtime": 
            let unixTimeObj ={unixtime: date.getTime()} 
            res.end(JSON.stringify(unixTimeObj))
        default:
            break;
    }

})

server.listen(process.argv[2])