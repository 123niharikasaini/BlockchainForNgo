import React from 'react'
import img from "../assets/bg.png"

const Banner = () => {
  return (
    <>
    <div className=" relative z-auto">
      <span className=''><img src={img} alt="." className='rounded-b-xl h-auto w-full'/></span>
      <span className='absolute inset-0 my-[20%] 
      text-center capitalize font-bold text-white
      bg-sky-950 flex justify-center h-[10%]'>
        <p className='text-2xl md:text-5xl'>Let's Help Together</p></span>
    </div>
    </>
  )
}

export default Banner