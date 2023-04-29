const { isUtf8 } = require('buffer');
const { log } = require('console');
const fs = require('fs'); 

// check if a file path is supllied 
// if not assign default program
if(process.argv[2]){
    var path = process.argv[2]
}else{
    var path = "test.txt"
}

// open file and recieve a buffer
// convert said buffer to a string
// split string to array of lines 
// return length of the array
const content = fs.readFileSync(path, "utf8")
const str_arr = content.split("\n"); 

console.log(str_arr.length -1);