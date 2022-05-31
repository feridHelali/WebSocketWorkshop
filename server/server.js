const express = require('express');
const cors = require('cors')
const http = require('http');


const app = express();
app.options('*', cors())
app.use(cors())

let clientConnections=[];

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:1234",
    }
});



app.get('/', (req, res) => {
    res.json({ message: 'Websocke :)' })
});

io.on('connection', (client) => {
    clientConnections.push(client.id)
    console.dir(client)
    console.log('a user connected');
    client.emit('Hi',JSON.stringify(clientConnections));
    client.on('message',(event$)=>{
        console.log(event$)
    })
    client.send('message',{message:'communication :)'})
});


server.listen(3000, () => {
    console.log('listening on *:3000');
});