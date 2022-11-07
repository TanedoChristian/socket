
import { Socket } from "socket.io-client";



const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const open = require('open')



io.on('connection', (socket: any) => {
    console.log('a user connected');
    
    socket.on('chat message', (data:string, message:string) => {
        io.emit('chat message', data, message)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
});









socket.on('message', (data: string, name: string) => {
    console.log('Client Message: ' + data)

    socket.broadcast.emit('message', data, name)
    })
});

app.get('/', (req: any, res: any) => {
    res.sendFile(__dirname + '/index.html')
})


http.listen(4000, () => {
    console.log('listening on :4000');
});



