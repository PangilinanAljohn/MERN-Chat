const jwt = require('jsonwebtoken');
const Users = require('../models/users');

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                error: "No Token Provided"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded){
            return res.status(401).json({
                error: "Invalid Token"
            })
        }

        const user = await Users.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({
                error: "User Not Found"
            })
        }

        req.user = user;

        next();
    } catch (error) {
        console.log('Error in protectRoute middleware', error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = protectRoute;