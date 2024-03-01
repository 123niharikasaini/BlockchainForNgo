import React from 'react'
import profile from "../assets/profile.png"

const Profile = () => {
  return (
    <>
    <div className='flex flex-col'>
        <div className='text-center font-bold text-xl md:text-3xl'>Hi! Username</div>
        <div className='flex justify-between m-2'>
            <span className='basis-[40%] m-2 text-center'>
                <img src={profile} alt=".."  className='object-cover aspect-auto'/>
            </span>
            <div className='m-2 p-2 text-center basis-[60%]'>
                <p className='text-lg'>Name</p>
                <p className='text-lg'>Total amount donated</p>
                <p className='text-lg'>NGO Donated</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile