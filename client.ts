import { read } from "fs";

const client_io = require('socket.io-client')
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout,
 });



const socket = client_io('http://localhost:4000')





socket.on("message", (data:string, name:string) => {
  console.log(`${name}: ${data}`)
})



process.stdin.on('data', (data: string) => {
    data = data.toString()
    console.clear()

    console.log('Sent: ', data)
    socket.emit('message', data, "Cj")   
})