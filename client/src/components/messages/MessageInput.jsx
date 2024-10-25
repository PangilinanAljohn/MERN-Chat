import { useState } from 'react';
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [ message, setMessage ] = useState("");

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!message){
      return;
    }

    await sendMessage(message);

    setMessage("");
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          className="input input-bordered input-primary rounded-lg block w-full p-2.5 bg-white text-gray-800"
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="flex items-center absolute inset-y-0 end-0 pe-3" type="submit">
          {loading ? <span className="loading loading-spinner"></span> : <BsSend/>}
        </button>
      </div>
    </form>
  )
}

export default MessageInput