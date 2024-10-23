const express      = require('express');
const dotenv       = require('dotenv');

const authRoutes   = require('./routes/auth');
const database     = require('./database/database');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get("/", (req, res) => {
//     res.send("Hello Worlds")
// });

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    database();
    console.log(`Server running on port ${PORT}`)
});