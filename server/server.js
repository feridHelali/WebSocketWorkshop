const express = require('express')
const app = express();


const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
      origin: "http://localhost:3000"
    }
  });

io.on('connection', client => {
  client.on('event', data => { 
      console.log(` event recievd from client with payload:${JSON.stringify(data)}`)
  });
  client.on('disconnect', () => {
    console.log(`${JSON.stringify(client)} is disconnected`)

  });
});

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
});