import Conversation from "./Conversation"

const Conversations = () => {
  return (
    <div className="flex flex-col py-1 overflow-auto">
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations