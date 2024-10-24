const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white bg-opacity-90">
                <h1 className='text-3xl font-semibold text-center text-gray-800'>
                    Login
                </h1>
                <form action="">
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="username">
                            <span className='text-base label-text text-gray-800'>Username</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your username'
                            type="text"
                            name="username"
                            id="username" 
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="password">
                            <span className='text-base label-text text-gray-800'>Password</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your password'
                            type="password"
                            name="password"
                            id="password" 
                        />
                    </div>
                    <a href="#" className='text-sm text-gray-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Don't have an account?
                    </a>
                    <button className='btn btn-primary btn-block text-white btn-sm mt-10'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login