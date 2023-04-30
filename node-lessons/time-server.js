/** import packages  */
const net = require('net');
const strftime = require('strftime');
/**pull port from cmd line arg */
const port = process.argv[2];

/**
 * create server to listen on tcp 
 * using strftime makes fomats easy
 *  pass in format specifies listed on github
 *      %F: yyyy-mm-dd 
 *      %R hh:mm
 *  pass in a date object 
 * concate a new line character to the formated date string 
 * return the formated date to the 
 * socket and close the socket with .end() 
 */
const server = net.createServer( socket =>{
    const data = strftime("%F %R", new Date()).concat("\n")
    socket.end(data)
})


server.listen(port)