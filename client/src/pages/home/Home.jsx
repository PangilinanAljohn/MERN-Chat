import MessageContainer from '../../components/messages/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[550px] md:h[650px] rounded-lg shadow-lg bg-white'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home