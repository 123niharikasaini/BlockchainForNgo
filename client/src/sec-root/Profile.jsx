import React, { useEffect, useState, useContext } from 'react'
import { userContext } from '../context/MetaMaskContext'
import profile from "../assets/profile.png"
import MakePayment from './MakePayment'

const Profile = () => {
  // const account=useContext(userContext)
  const {state,account}=useContext(userContext)
  // const account=useContext(userContext)
  // console.log(account[0])
  const address=account[0]

  const [detail,setDetail]=useState({
    name:"",
    occ:""
  });
  

  const contract=state.contract;
  // console.log(contract.getDetail(address))


  useEffect(()=>{
    const info=async()=>{
      let temp;
      let srNo;
      let det;
      const checkDonor=await contract.ifDonor(address);
      // const checkNGO=await contract.ifNgo(address);
      if(checkDonor){
        temp=await contract.getDetailDonor(address)
        srNo=parseInt(temp._hex,16)
        det=await contract.donorList(srNo)
        setDetail({name:det[2],occ:"Donor"})
      }
        else{
          temp=await contract.getDetail(address)
          srNo=parseInt(temp._hex,16)
          det=await contract.ngoList(srNo)
          setDetail({name:det[2],occ:"NGO"})

        }
      // console.log(det)
      // setDetail({name:det[2]})
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
            <div className='m-2 p-2 text-center flex flex-col justify-evenly
            basis-[60%] bg-slate-500 text-white'>
                <p className='text-xl font-bold '>Name:  {detail.name} </p>
                <p className='text-lg '>Registered as:  {detail.occ}</p>
                {/* <p className='text-lg'>NGO Donated</p> */}
            </div>
        </div>
        {detail.occ=="NGO"?<MakePayment/>:""}
        
    </div>
    </>
  )
}

export default Profile