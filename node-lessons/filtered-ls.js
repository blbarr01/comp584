const { error, log } = require("console");
const {readdir} = require("fs")
const {dirname, extname} = require("path")

/**
 * use ternatrys to assign args and provide defaults if none give
 */
let dir = process.argv[2] ? process.argv[2] : "./";  
let fileformat = process.argv[3] ? "."+process.argv[3] : ".txt"; 



const data = readdir(dir, "utf8", (error, files) =>{
    if (error) {console.error(error);return;}

    const filtered_files = files.filter((element)=>{
        return extname(element) === fileformat
    })

    filtered_files.forEach(file => console.log(file));

})
