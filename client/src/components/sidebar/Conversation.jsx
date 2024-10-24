const Conversation = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-gray-400 rounded p-2 py-2 cursor-pointer">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img 
                        src="https://cdn0.iconfinder.com/data/icons/cryptocurrency-137/128/1_profile_user_avatar_account_person-132-512.png"
                        alt="user avatar"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-2 justify-between">
                    <p className="font-bold text-gray-800">John Doe</p>
                </div>
            </div>
        </div>
        <div className="divider my-0 py-0 h-1"></div>
    </>
  )
}

export default Conversation