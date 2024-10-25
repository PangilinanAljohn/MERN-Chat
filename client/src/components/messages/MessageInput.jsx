import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input
              className="input input-bordered input-primary rounded-lg block w-full p-2.5 bg-white text-gray-800"
              type="text"
              placeholder="Type a message"
            />
            <button className="flex items-center absolute inset-y-0 end-0 pe-3" type="submit">
              <BsSend/>
            </button>
        </div>
    </form>
  )
}

export default MessageInput