import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
                <h1 className='text-3xl font-semibold text-center text-gray-800'>
                    Login
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="username">
                            <span className='text-base label-text text-gray-800'>Username</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your username'
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/signup" className='text-sm text-gray-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Don't have an account?
                    </Link>
                    <button 
                        className='btn btn-primary btn-block text-white btn-sm mt-10'
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner"></span> : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login