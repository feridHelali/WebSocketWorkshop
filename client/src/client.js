var socket = io('http://localhost:3000');

socket.on("connect", () => {
    console.log(socket.id); 
});

socket.on("disconnect", () => {
    console.log(socket.id); 
});

socket.on('Hi',event =>{
    console.log(event)
})

socket.emit('message',{from:socket.id,message:`a messagge`})