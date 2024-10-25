import { useState } from 'react'
import { CiSearch  } from 'react-icons/ci'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const Search = () => {
  const [ search, setSearch ] = useState('');

  const { setSelectedConversation } = useConversation();

  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!search){
      return;
    }

    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((v) => v.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error("No users found");
    }
  }
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
            className='input input-bordered input-primary text-gray-800 bg-gray-50 rounded-full mt-2 mx-2'
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <button className="flex items-center absolute inset-y-0 end-0 pe-5 mt-2" type="submit">
          <CiSearch />
        </button>
      </div>
    </form>
  )
}

export default Search