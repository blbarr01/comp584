const http = require('http');
const fs = require('fs');

// inherits from event emmitter 
const readStream = fs.createReadStream(__dirname+'/docs/test.txt');
const writeStream = fs.createWriteStream(__dirname+'/docs/pipe.txt')

readStream.pipe(writeStream)