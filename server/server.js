const express = require('express');
const cors = require('cors')
const http = require('http');


const app = express();
app.options('*', cors())
app.use(cors())


const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors: {
    origin: "http://localhost:1234",
  }
});



app.get('/', (req, res) => {
    res.json({ message: 'Websocke :)' })
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});