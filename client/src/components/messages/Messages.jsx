import { useEffect, useRef } from 'react'
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./Message"
import useListenMessages from '../../hooks/useListenMessages';

const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center '>
				<div className='skeleton w-10 h-10 rounded-full shrink-0 bg-gray-400'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40 bg-gray-400'></div>
					<div className='skeleton h-4 w-40 bg-gray-400'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-40 bg-gray-400'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0 bg-gray-400'></div>
			</div>
		</>
	);
};

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef(); 

  useEffect(() => {
    setTimeout(() =>{
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  }, [messages])
  
  return (
    <div className="flex-1 px-4 overflow-auto">
      {
        !loading && messages.length > 0 && messages.map(
          (message) => (
            <div
              key={message._id}
              ref={lastMessageRef}
            >
              <Message message={message} />
            </div>
          )
        )
      }

      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}

      {!loading && messages.length === 0 && (
        <p className="text-center mt-2">Send a message to start a conversation</p>
      )}
    </div>
  )
}

export default Messages