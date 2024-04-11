import React, { useContext, useEffect, useState } from 'react'
import Row from './Row'
import { userContext } from '../context/MetaMaskContext'

const Donate = () => {

  const {state}=useContext(userContext);
  const [list,setList]=useState([]);
  const [name,setName]=useState("");
  const [address,setAddress]=useState("");
  // const [tillDate,setTillDate]=useState("")


  useEffect(()=>{
    const showReq=async()=>{
      const temp= await state.contract.allReqList();
      setList([...temp])
      

    }
    showReq();
  },[]);
  // console.log(list)

  const getDetails=async(add)=>{
    const det=await state.contract.getDetail(add);
    // console.log(det._hex)
    const info=await state.contract.allNgoList();
    const ngoDet=info[0]
    const ngoName=ngoDet[2]
    // console.log(ngoDet)
    setName(ngoName)
    setAddress(ngoDet[1])
    // setTillDate()
  }


  return (
    <>
    <div className='m-2 p-4 flex'>
        <table className='w-full'>

          <tr className='grid grid-cols-5 gap-2 bg-blue-900 text-white text-center p-2'>
          <th>Ngo Name</th>
  
          <th>Purpose</th>
  
          <th>Amount</th>
      
          <th>Deadline</th>

          <th>Action</th>

          </tr>
{list?.map((val)=>{
  // const temp=val[2]._hex
  // console.log(parseInt(temp,16))
  // console.log(val[6]._hex)
  getDetails(val[1])
  return (
        <Row name={name} add={address} total={parseInt(val[6]._hex,16)} purpose={val[3]} amt={parseInt(val[2]._hex,16)} date={parseInt(val[4]._hex,16)} action="Donate"/>
)})}
          

        </table>
    </div>
    </>
  )
}

export default Donate