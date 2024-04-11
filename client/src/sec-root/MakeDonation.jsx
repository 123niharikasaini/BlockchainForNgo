import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../context/MetaMaskContext'
import { ethers } from 'ethers'

const MakeDonation = (props) => {

  const {state, account}=useContext(userContext);
  const [totalAmount,setAmount]=useState(0)
  const contract=state.contract

  const sending=async(event)=>{
    event.preventDefault();
    const amt=event.target.amt.value;
    const amount={value:ethers.utils.parseEther(amt)}
    // console.log(amt)
    const callDonate=await contract.makeDonations(props.add,amount)
    console.log(callDonate)
  }

  useEffect(()=>{
    const calling=async()=>{
    const amt=await contract.allReqList()
    console.log(amt)
  }
    // setAmount(amt)
    calling();
  },[])




  return (
    <>
    <div className='bg-sky-900 text-white'>

      <div className='flex justify-center'>
      <span className='p-2 m-2'>Total Amount Collected:</span>
      <span className='p-2 m-2'>{totalAmount}</span>
        </div>
    <form className='m-2 p-2 ' onSubmit={sending}>
        <div className='p-2 m-2 flex justify-evenly'>
        <label htmlFor="amt" className='text-white text-bold'>Amount in ETHER:</label>
        <input type="text" name='amt' id='amt'
        className='mx-2 p-2 outline-none bg-slate-100 rounded-md'/>
        </div>

        <div className='p-2 text-white cursor-pointer  flex justify-center'>
            <button type="submit" className='p-4 rounded-md bg-sky-400'>Add NGO</button>
        </div>
    </form>
    </div>
    </>
  )
}

export default MakeDonation