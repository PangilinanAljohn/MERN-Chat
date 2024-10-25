import { CiSearch  } from 'react-icons/ci'

const Search = () => {
  return (
    <form className="flex items-center gap-2">
      <div className="w-full relative">
        <input
            className='input input-bordered input-primary text-gray-800 bg-gray-50 rounded-full mt-2 mx-2'
            type="text"
            placeholder="Search"
            // className="input input-bordered rounded-full"
        />

        <button className="flex items-center absolute inset-y-0 end-0 pe-5 mt-2" type="submit">
          <CiSearch />
        </button>
      </div>
    </form>
  )
}

export default Search