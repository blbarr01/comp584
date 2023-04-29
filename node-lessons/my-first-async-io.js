 /* use object destructoringt to pull out just what we want */
const {readFile} = require('fs')


if(process.argv[2]){
    var path = process.argv[2]
}else{
    var path = "test.txt"
}

/** order of the args in call back matter!!
 *  mistakenly writing (data, error) => was a nightmare to debug
 */
readFile(path, "utf8", (error, data)=>{
    if(error){ console.error("there was an error", error); return}
    console.log(data.split('\n').length-1);
})

