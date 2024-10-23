const Users = require('../models/users')
const bcryptjs = require('bcryptjs')

const generateTokenandSetCookie = require('../utils/generateToken');

const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        // USER AUTH
        const user = await Users.findOne({username})

        if(user){
            return res.status(400).json({
                 error: "Username already exists"
            })
        }

        // PASSWORD AUTH
        if(password !== confirmPassword){
            return res.status(400).json({
                error: "Password don't match"
            })
        }

        // PASSWORD HASHING
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);

        // GENERATE RANDOM AVATAR BASED ON GENDER
        const profilePicMale = `https://avatar.iran.liara.run/public/boy?usrename=${username}`
        const profilePicFemale = `https://avatar.iran.liara.run/public/girl?usrename=${username}`

        // CREATE USER
        const newUser = new Users({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'Male' ? profilePicMale : profilePicFemale
        })

        if(newUser){
            generateTokenandSetCookie(newUser._id, res)

            await newUser.save()

            res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            });
        }else{
            res.status(400).json({
                error: "Invalid User Data"
            });
        }
    } catch (error) {
        console.log("Error in Signing up", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}


const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Users.findOne({username});
        const isPasswordIncorrect = await bcryptjs.compare(password, user?.password || "");

        if(!user || !isPasswordIncorrect){
            res.status(400).json({
                error: "Invalid username or password"
            })
        }

        generateTokenandSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("Error in Login", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {
            maxAge: 0
        });

        res.status(200).json({
            message: "Logged Out Successfully"
        });
    } catch (error) {
        console.log("Error in Logout", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

module.exports = {
    login, 
    signup, 
    logout 
}