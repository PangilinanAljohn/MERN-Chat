import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const from = message.senderId === authUser._id;
    const chatClassName = from ? 'chat-end' : 'chat-start';
    const profilePic = from ? authUser.profilePic : selectedConversation?.profilePic;
    const chatBubbleColor = from ? 'bg-sky-400' : "bg-gray-600";

    const date = new Date(message.createdAt);
    let hrs = date.getHours();
    const min = date.getMinutes().toString().padStart(2, "0");

    const period = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    hrs = hrs.toString().padStart(2, "0");

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        src={profilePic}
                        alt="User avatar"
                    />
                </div>
            </div>
            <div className={`chat-bubble text-white pb-2 ${chatBubbleColor}`}>
                {message.message}
            </div>
            <div className="flex gap-1 items-center chat-footer opacity-100 text-xs">
                {hrs}:{min} {period}
            </div>
        </div>
    )
}

export default Message