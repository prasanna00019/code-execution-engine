import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import UseLogin from '../hooks/UseLogin'
const Login = () => {
  const [username,setusername]=useState('');
  const [password, setpassword] = useState('')
  const {loading , login}=UseLogin();
  const handleSubmit=async(e)=>{
   e.preventDefault();    
   await login(username,password);
  }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-[400px] h-[400px] p-6  bg-white-800 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 border border-gray-100'>
          <h1 className='text-3xl font-semibold text-center text-gray-500'>
            LOGIN
          <span className='text-blue-800 '>    TO CODE</span>
          </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' 
                value={username} onChange={(e)=>setusername(e.target.value)}
                />
            </div>
            <div>
                <label className='label'>
                 <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password'
                className='w-full input input-bordered h-10'
                value={password}
                onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              dont have an account ?
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-2'
                disabled={loading}>
                   {loading?<span className='loading loading-spinner'></span>:"LOGIN"}
                   </button>
            </div>
        </form>

        </div>
      
    </div>
  )
}

export default Login
