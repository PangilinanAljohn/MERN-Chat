const { Server } = require('socket.io');
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://mern-chat-jqsj.onrender.com/'],
        methods: ['GET', 'POST']
    }
});

const getReceiverSocketId = (receiverId) => {
    return usersSocketMap[receiverId];
}

const usersSocketMap = {};

io.on('connection', (socket) => {
    console.log('User connected', socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != 'undefined'){
        usersSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(usersSocketMap));

    socket.on("disconnect" ,() => {
        console.log('User disconnected', socket.id);

        delete usersSocketMap[userId];

        io.emit("getOnlineUsers", Object.keys(usersSocketMap));
    });
});

module.exports = {
    app,
    io,
    server,
    getReceiverSocketId
}