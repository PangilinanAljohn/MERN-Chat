const Message = () => {
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"
                    alt="User avatar"
                />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">
            Hi!
        </div>
        <div className="flex gap-1 items-center chat-footer opacity-100 text-xs">
            12:42 PM
        </div>
    </div>
  )
}

export default Message