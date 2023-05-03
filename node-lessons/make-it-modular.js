const ls  = require("./mymodule")
let dir = process.argv[2] ? process.argv[2] : "./";  
let ext = process.argv[3] ? process.argv[3] : "txt"; 


ls(dir, ext, (error, data)=>{
    if (error){return console.log(error);}
    
    data.forEach(datum => {
        console.log(datum);
    });
}); 


