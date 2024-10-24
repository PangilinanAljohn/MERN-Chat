import Search from './Search'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-slate-500 p-4'>
        <Search/>
        <div className="divider divider-neutral px-3"></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar