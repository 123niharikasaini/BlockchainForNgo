import React, { useState } from 'react'

const Row = (props) => {
  // const [action,setAction]=useState("")
  
  // props.act?setAction(props.act):"Donate"

  return (
    <>
    <tr className='grid grid-cols-5 gap-2 bg-slate-100 text-black text-center'>
          <td>{props.name}</td>
  
          <td>{props.purpose}</td>
  
          <td>{props.amt}</td>
      
          <td>{props.date}</td>

          <td className=''>
            <button className='hover:bg-blue-900 hover:text-white 
            rounded-md px-2'>
              {props.action}</button>
          </td>

          </tr>
    </>
  )
}

export default Row