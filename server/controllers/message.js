const Conversation = require("../models/conversation")
const Message = require("../models/message");
const { io, getReceiverSocketId } = require("../socket/socket");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [
                    senderId,
                    receiverId
                ]
            }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants:[
                    senderId,
                    receiverId
                ]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in Sending Message", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [
                    senderId, userToChatId
                ]
            }
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);
        
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.log("Error in Getting Message", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

module.exports = {
    sendMessage,
    getMessage
};