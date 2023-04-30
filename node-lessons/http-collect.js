const bl = require('bl');
const http = require('http');
// again pullin the first element which is an http url
let url = process.argv[2]


http.get(url, (res)=>{
    res.pipe(bl((err, data)=>{
        if (err) {
            return console.error(err);
        }
        console.log(data.length);
        console.log(data.toString());
    }))
})