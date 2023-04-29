
/* use slice to gather the elements after the first two 
    by default first two args are 
    0: runtime = node 
    1: file path 
    2 ...: args supplied to the program at runtime 
*/
const args  = process.argv.slice(2)

/* use a reducer function to generate a sum 
    for each element in array, 
        add that number to the total
    return total 
 */
const sum  = args.reduce((total, arg)=> total+Number(arg), 0)

console.log(sum);