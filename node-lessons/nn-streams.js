const http = require('http');
const fs = require('fs');

// inherits from event emmitter 
const myreadStream = fs.createReadStream(__dirname+'/docs/test.txt');
const writeStream = fs.createWriteStream(__dirname+'/docs/written.txt')
// on data event 
//read the file in byte by byte
myreadStream.on('data', (chunk)=>{
    console.log(chunk);
    writeStream.write(chunk)
} )


