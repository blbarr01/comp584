const fs = require('fs')
const {extname} = require("path")

/***
 * while identical to the call in the filtered-ls.js file
 * object destructuring could not be used to pass learnyounod
 * const {readdir} = require('fs') would not pass
 * instead the other pattern had to be used
 */
module.exports = function(dir, ext, callBack){
    fs.readdir(dir, "utf8", (error, files) =>{
        if (error)
            return callBack(error);
        
        filtered_files = files.filter((element)=>{
            return extname(element) === "."+ext
        })    
        return callBack(null, filtered_files)
    })
}


