import { useEffect } from 'react'
import { TiMessages } from 'react-icons/ti'
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import useConversation from '../../zustand/useConversation'

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center gap-2 px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold">
                <p>Welcome John Doe</p> 
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
      return () => setSelectedConversation(null);
    }, [setSelectedConversation])

    return (
        <div className="flex flex-col md:min-w-[450px]">
            { 
                !selectedConversation ? 
                (
                    <NoChatSelected/>
                ) : (
                    <>
                        <div className="bg-sky-400 px-4 py-2 mb-2 rounded-tr-lg">
                            <span className="text-white font-bold">{selectedConversation.fullName}</span>
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