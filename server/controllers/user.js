const Users = require("../models/users");

const getUserList = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const allUsers = await Users.find({
            _id: {
                $ne: loggedInUserId
            }
        }).select("-password");

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in Getting User List", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

module.exports = {
    getUserList
}