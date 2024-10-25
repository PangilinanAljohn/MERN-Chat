import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation"

const Conversation = ({conversation, lastItem}) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-400 rounded p-2 py-2 cursor-pointer group ${isSelected ? "bg-sky-400 ": "" }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? 'online' : ''}`}>
                    <div className="w-12 rounded-full">
                        <img 
                            src={conversation.profilePic}
                            alt="user avatar"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-2 justify-between">
                        <p className={`font-bold group-hover:text-white ${isSelected ? "text-white": "text-gray-800" }`}>{conversation.fullName}</p>
                    </div>
                </div>
            </div>
            {!lastItem && <div className="divider my-0 py-0 h-1"></div>}
        </>
    )
}

export default Conversation