const Search = () => {
  return (
    <form className="flex items-center gap-2">
        <input
            className='input input-bordered input-primary text-gray-800 bg-gray-50 border-gray-600 rounded-full mt-2 mx-2'
            type="text"
            placeholder="Search"
            // className="input input-bordered rounded-full"
        />
    </form>
  )
}

export default Search