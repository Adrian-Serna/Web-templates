const Socket = io();
Socket.on('myMessage', (msg) => {
    alert(msg)
    Socket.emit('myResponse', 'Hello from the client') 
})