import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa6'
import { IoLockClosed } from 'react-icons/io5'
import SocialIcons from '../socialIcons/SocialIcons'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="form_box login absolute right-0 w-[50%] h-full bg-white flex items-center text-[#333] text-center p-[40px] z-[1]">
      <form
        action=""
        className="w-full"
      >
        <h1 className="text-[#888] text-[2rem] -my-[10px] mx-0 font-bold">
          Login
        </h1>
        <div className="input_box relative mx-0 my-[30px]">
          <span className="icon">
            <FaUser className="absolute right-[20px] top-[50%] -translate-y-[50%] text-[20px] text-[#888]" />
          </span>
          <input
            type="text"
            required
            className="w-full pt-[20px] pb-[5px] pl-[20px] pr-[50px] bg-[#eee] rounded-[8px] border-none outline-none text-[1rem] text-[#333] font-[500] placeholder:text-[#888] placeholder:font-[500]"
          />
          <label className="absolute top-[50%] left-[20px] -translate-y-1/2 text-[#888] font-[400] pointer-events-none duration-[0.5s]">
            Username
          </label>
        </div>
        <div className="input_box relative mx-0 my-[30px]">
          <span className="icon">
            <IoLockClosed className="absolute right-[20px] top-[50%] -translate-y-1/2 text-[20px] text-[#888]" />
          </span>
          <input
            type="password"
            required
            className="w-full pt-[20px] pb-[5px] pl-[20px] pr-[50px] bg-[#eee] rounded-[8px] border-none outline-none text-[1rem] text-[#333] font-[500] placeholder:text-[#888] placeholder:font-[500]"
          />
          <label className="absolute top-[50%] left-[20px] -translate-y-[50%] text-[#888] font-[400] pointer-events-none duration-[0.5s]">
            Password
          </label>
        </div>
        <div className="forgot_link mx-0 -mt-[15px] mb-[15px]">
          <Link
            to=""
            className="text-[14.5px] text-[#333] no-underline"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="btn w-full h-[48px] bg-[#7494ec] rounded-[8px] border-none cursor-pointer text-[16px] text-white font-[600]"
        >
          Login
        </button>
        <p className="text-[14.5px] my-[15px] mx-0">
          or login with social platforms
        </p>
        <SocialIcons />
      </form>
    </div>
  )
}

export default Login
