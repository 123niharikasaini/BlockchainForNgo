import React, { useState } from 'react'
import Modal from '../Modal';
import Donate from '../sec-root/Donate';


const Card = (props) => {
  const [secView,setSecView]=useState(false);
  return (
    <>
    <div className='flex flex-col bg-sky-950 border-2
         border-sky-950 rounded-lg hover:shadow-xl shadow-slate-50 cursor-pointer '>
            <div className='basis-[40%] p-2'>
              <img src={props.img} alt="" />
            </div>
            <div className='bg-yellow-400 rounded-lg p-2 mx-4 my-2
            hover:shadow-2xl shadow-black '>
              <button className='font-bold w-full' 
              onClick={()=>setSecView(true)}>{props.but}</button>
            </div>
            {secView?<Modal onClose={()=>setSecView(false)}> {props.ele}</Modal>:null}
    </div>
    </>
  )
}

export default Card