import React from 'react'
import about from "../assets/about2.png"

const About = () => {
  return (
    <>
    <div className='p-4 bg-yellow-400 border-b-2 border-sky-950'>
      <div className='capitalize text-center text-4xl
       font-bold text-sky-950  rounded-md'>What we Do?</div>

       <div className='flex p-2 w-full'>
        <span className='p-2 basis-[50%]'>
          <img src={about} alt=""  className='w-full h-full aspect-auto object-contain'/>
        </span>
        <span className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ab ullam totam voluptatem vero? Reiciendis laboriosam ratione voluptate? Odio facilis et dolorum facere sint blanditiis necessitatibus animi commodi eius consequuntur!</span>
       </div>
    </div>
    </>
  )
}

export default About