const express      = require('express');
const dotenv       = require('dotenv');
const cookieParser = require('cookie-parser');
const path         = require('path');

const authRoutes    = require('./routes/auth');
const messageRoutes = require('./routes/message');
const userRoutes    = require('./routes/user');

const database        = require('./database/database');
const { app, server } = require('./socket/socket');

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

server.listen(PORT, () => {
    database();
    console.log(`Server running on port ${PORT}`)
});