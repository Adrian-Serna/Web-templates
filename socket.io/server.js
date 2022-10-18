const express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(3000, () => console.log('listening on *:3000')) 

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.emit('myMessage', 'Hello from the server')   
    socket.on('myResponse', (msg) => {
        console.log(msg)
    }) 
})

