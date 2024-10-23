const express      = require('express');
const dotenv       = require('dotenv');
const cookieParser = require('cookie-parser');

const authRoutes    = require('./routes/auth');
const messageRoutes = require('./routes/message');

const database     = require('./database/database');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
//     res.send("Hello Worlds")
// });

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    database();
    console.log(`Server running on port ${PORT}`)
});