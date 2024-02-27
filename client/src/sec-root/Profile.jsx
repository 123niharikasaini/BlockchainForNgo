import React from 'react'
import profile from "../assets/profile.png"

const Profile = () => {
  return (
    <>
    <div className='flex flex-col'>
        <div className='text-center font-bold text-xl md:text-3xl'>Hi! Username</div>
        <div className='flex justify-between m-2'>
            <span className='basis-[40%] m-2'>
                <img src={profile} alt=".."  className='object-cover aspect-auto'/>
            </span>
            <span className='m-2 p-2'>
                <form action="">
                  <label htmlFor="">
                    <input type="text"/>
                  </label>
                </form>
            </span>
        </div>
    </div>
    </>
  )
}

export default Profile