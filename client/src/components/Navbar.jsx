import React, { useEffect, useState } from 'react'
import Modal from '../Modal';
import Profile from '../sec-root/Profile';

const Navbar = () => {

  const [isSticky,setIsSticky]=useState(false)
  const [secView,setSecView]=useState(false);

  useEffect(()=>{
    // handling scrolling
    // for navbar to change its color
    const handleScroll=()=>{
      if(window.scrollY>100){
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
  },[])

  return (
    <>
    <header className='fixed left-0 right-0 top-0 transition-all ease-in duration-200 z-50'>
    <div className={`p-2 flex justify-between ${isSticky?'bg-sky-950 text-white':''}`}>
      {/* navbar container */}
      <div className='m-2 p-2 text-4xl font-bold text-white'>
        {/* for logo */}
          <span>ForNGO</span>
      </div>
      <div className='basis-[60%] m-2 p-2'>
        {/* flex for menu */}
        <div className='flex justify-end text-white'>   
          {/* <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer'>Home</span> */}
          {/* <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer capitalize'>What we do</span> */}
          {/* <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer'>Contact Us</span> */}
          {/* <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer'>Our Services</span> */}
          <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer'
          onClick={()=>setSecView(true)}>Profile</span>
          {/* <span className='p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer'>Logout</span> */}
        </div>
        {secView?<Modal onClose={()=>setSecView(false)}><Profile/></Modal>:null}
      </div>
    </div>
    </header>
    </>
  )
}

export default Navbar