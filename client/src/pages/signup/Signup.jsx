const Signup = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white bg-opacity-90">
                <h1 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Create a new account
                </h1>
                <form action="">
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="fullName">
                            <span className='text-base label-text text-gray-800'>Full Name</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Enter your full name'
                            type="text"
                            name="fullName"
                            id="fullName" 
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
                    <div className="mb-2">
                        <label className='label p-2' htmlFor="confirmPassword">
                            <span className='text-base label-text text-gray-800'>Confirm Password</span>
                        </label>
                        <input 
                            className='w-full input input-bordered input-primary h-12 text-gray-800 bg-gray-50'
                            placeholder='Confirm your password'
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword" 
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
                                        name="gender"
                                        id="male"
                                        value="male"
                                    />
                                    <span className='label-text ml-2 text-gray-800'>Male</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className='label cursor-pointer' htmlFor="female">
                                    <input
                                        className='radio radio-primary'
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                    />
                                    <span className='label-text ml-2 text-gray-800'>Female</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <a href="#" className='text-sm text-gray-800 hover:underline hover:text-blue-600 inline-block mt-6'>
                        Already have an account?
                    </a>
                    <button className='btn btn-primary btn-block text-white btn-sm mt-4'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
