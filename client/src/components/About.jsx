import React from 'react'
import about from "../assets/about2.png"

const About = () => {
  return (
    <>
    <div className='p-10 bg-yellow-400 border-b-2 border-sky-950'>
      <div className='capitalize text-center text-4xl
       font-bold text-sky-950  rounded-md'>What we Do?</div>

       <div className='flex p-2 w-full'>
        <span className='p-2 basis-[35%] md:basis-[50%]'>
          <img src={about} alt=""  className='w-full h-full aspect-auto object-contain'/>
        </span>
        <span className='p-4 text-xl font-serif basis-[65%] md:basis-[50%]'>
        For you is curated for those who believe sharing is caring. This platform allows donation to be done with transparency and security. For you uses blockchain and smart contract to maintain security. 
        It let the donor to track and trace the donated amount. For you is the right platform for people who want to donate but hesitate because of opacity and ambiguity.
        Let us make a better world by sharing.For you patform acts as a meeting point for those who want donations and the donor. One can donate and make request for donation as well.
        </span>
       </div>
    </div>
    </>
  )
}

export default About