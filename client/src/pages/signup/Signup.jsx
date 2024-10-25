import { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const Signup = () => {
    const [ data, setData ] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignUp();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signup(data);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
                <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Create a new account
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="fullName">
                            <span className='text-base label-text text-gray-800'>Full Name</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your full name'
                            type="text"
                            id="fullName"
                            value={data.fullName}
                            onChange={(e) => setData({...data, fullName: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="username">
                            <span className='text-base label-text text-gray-800'>Username</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your username'
                            type="text"
                            id="username"
                            value={data.username}
                            onChange={(e) => setData({...data, username: e.target.value})}
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
                            value={data.password}
                            onChange={(e) => setData({...data, password: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="confirmPassword">
                            <span className='text-base label-text text-gray-800'>Confirm Password</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Confirm your password'
                            type="password"
                            id="confirmPassword"
                            value={data.confirmPassword}
                            onChange={(e) => setData({...data, confirmPassword: e.target.value})}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="gender">
                            <span className='text-base label-text text-gray-800'>Gender</span>
                        </label>
                        <div className="flex items-center">
                            <div className="form-control">
                                <label className='label cursor-pointer' htmlFor="male">
                                    <input
                                        className='radio radio-primary'
                                        type="radio"
                                        id="male"
                                        value="Male"
                                        checked={data.gender === 'Male'}
                                        onChange={(e) => setData({...data, gender: e.target.value})}
                                    />
                                    <span className='label-text ml-2 text-gray-800'>Male</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className='label cursor-pointer' htmlFor="female">
                                    <input
                                        className='radio radio-primary'
                                        type="radio"
                                        id="female"
                                        value="Female"
                                        checked={data.gender === 'Female'}
                                        onChange={(e) => setData({...data, gender: e.target.value})}
                                    />
                                    <span className='label-text ml-2 text-gray-800'>Female</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <Link to="/login" className='text-sm text-gray-800 hover:underline hover:text-blue-600 inline-block mt-6'>
                        Already have an account?
                    </Link>
                    <button 
                        className='btn btn-primary btn-block text-white btn-sm mt-4'
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
