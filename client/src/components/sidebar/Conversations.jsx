import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  console.log(conversations)

  return (
    <div className="flex flex-col py-1 overflow-auto">
      {
        conversations.map((conversation, index)=>(
          <Conversation 
            key={conversation._id}
            conversation={conversation}
            lastItem={index===conversations.length - 1}
          />
        ))
      }

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default Conversations