import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../context/MetaMaskContext'
import profile from "../assets/profile.png"
import MakePayment from './MakePayment'

const Profile = () => {
  // const account=useContext(userContext)
  const {state}=useContext(userContext)
  const account=useContext(userContext)
  console.log(account)
  const address=account.account[0]

  const [detail,setDetail]=useState({
    name:"",
  });
  const contract=state.contract;
  // console.log(contract.getDetail(address))


  useEffect(()=>{
    const info=async()=>{
      // console.log(address)
      const temp=await contract.getDetail(address)
      const srNo=parseInt(temp._hex,16)
      const det=await contract.donorList(srNo)
      console.log(det)
      setDetail({name:det[2]})
    }
    info();
    // console.log(detail)

  },[])

  return (
    <>
    {/* {console.log(detail[2])} */}
    <div className='flex flex-col'>
        <div className='text-center font-bold text-xl md:text-3xl'>Hi! Username</div>
        <div className='flex justify-between m-2'>
            <span className='basis-[40%] m-2 text-center'>
                <img src={profile} alt=".."  className='object-cover aspect-auto'/>
            </span>
            <div className='m-2 p-2 text-center basis-[60%]'>
                <p className='text-lg'>Name:  {detail.name} </p>
                <p className='text-lg'>Total amount donated</p>
                <p className='text-lg'>NGO Donated</p>
            </div>
        </div>
        <MakePayment/>
    </div>
    </>
  )
}

export default Profile