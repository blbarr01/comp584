const {createServer} = require('http');
const url = require('url')


const server = createServer((req, res)=>{
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