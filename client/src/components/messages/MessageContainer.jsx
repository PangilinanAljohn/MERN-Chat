import { TiMessages } from 'react-icons/ti'
import MessageInput from "./MessageInput"
import Messages from "./Messages"

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold ">
                <p>Welcome John Doe</p> 
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

const MessageContainer = () => {
    const noChatSelected = false;
    return (
        <div className="flex flex-col md:min-w-[450px]">
            { 
                noChatSelected ? 
                (
                    <NoChatSelected/>
                ) : (
                    <>
                        <div className="bg-cyan-800 px-4 py-2 mb-2">
                            <span className="text-white font-bold">John Doe</span>
                        </div>
                        <Messages />
                        <MessageInput/>
                    </>
                )
            }
        </div>  
    )
}

export default MessageContainer