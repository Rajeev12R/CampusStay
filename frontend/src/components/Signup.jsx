import React from 'react';
import './Signup.css';
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className='w-screen h-screen items-start flex justify-center'>
      <div className='bg-white shadow-md shadow-slate-300 w-[30%] my-10 h-auto p-7'>
        <h3 className='mb-6'>
          <span className='text-black'>~Campus</span>
          <span className='text-blue-600'>Stay</span>
        </h3>
        <h2 className='inter-signup-text text-gray-600 text-4xl'>Signup</h2>
        <form action="" method="post" className='mt-8 flex flex-col '>
            <label htmlFor="" className='text-[14px] text-zinc-500'>Full name</label>
            <input type="text" name="fullname" id="fullname" className=' p-2 mt-1 mb-4 shadow-md shadow-zinc-200 hover:outline-zinc-600 outline-none rounded-md' placeholder='Rakesh Roushan'/>
            <label htmlFor="" className='text-[14px] text-zinc-500'>Email</label>
            <input type="email" name="email" id="email" className=' p-2 mt-1 mb-4 shadow-md shadow-zinc-200 hover:outline-zinc-600 outline-none rounded-md' placeholder='Rakesh@gmail.com'/>
            <label htmlFor="" className='text-[14px] text-zinc-500'>Password</label>
            <input type="password" name="password" id="password" className='p-2 mt-1 mb-6 shadow-md shadow-zinc-200 hover:outline-zinc-600 outline-none rounded-md' placeholder='CampusStay123@'/>
            <div className='flex items-center gap-3'>
            <input type="checkbox" name="updates" id="updates" className=''/> 
            <p className='text-zinc-500'>I want to receive updates via mail.</p>
            </div>
            <button className='bg-[#1C212C] hover:bg-[#252B38] text-white p-2 mt-7 rounded-md'>Sign Up</button>
            <div className='flex items-center gap-1 justify-center my-3'>
                <p className='text-zinc-500'>Already have an acoount?</p>
                <a href="#" target="_blank" className='underline'>Sign in</a>
            </div>
        </form>
        <div className='flex items-center justify-center'>
            <hr className='flex-grow border-gray-300'/>
            <p className='mx-2 text-gray-500'>or</p>
            <hr className='flex-grow border-gray-300'/>
        </div>
        <div className='flex flex-col'>
        <button type='submit' className='my-4 bg-white outline outline-gray-200 hover:outline-black p-3'>
            <div className='flex gap-3 items-center justify-center'>
            <FcGoogle  className='w-[17px] h-[17px]'/>
            Sign in with Google
            </div>
        </button>
        <button type='submit' className=' bg-white outline outline-gray-200 hover:outline-black p-3'>
            <div className='flex gap-3 items-center justify-center'>
            <i className="fab fa-apple"></i>
            Sign in with Apple
            </div>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
