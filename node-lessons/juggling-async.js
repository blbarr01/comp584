const bl = require('bl');
const http = require('http');

let urls = [] 

urls.push(process.argv[2])
urls.push(process.argv[3])
urls.push(process.argv[4])


urls.forEach((url)=>{http.get(url, (res)=>{
    res.pipe(bl((err, data)=>{
        if (err) {
            return console.error(err);
        }
        console.log(data.toString());
    }))
})})