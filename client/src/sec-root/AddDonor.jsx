import React from 'react'
import { useContext } from 'react';
import { userContext } from '../context/MetaMaskContext';

const AddNGO = () => {

    const {state}=useContext(userContext)
    // console.log(state.contract)
    const contract=state.contract
    

    const saveInfo=async(event)=>{
        event.preventDefault();
        const name=event.target.name.value
        console.log(name)

        const saving=await contract.addDonor(name)
        // console.log(event.target.name.value)

        // console.log(contract)
        // console.log(await contract.allNgoList())

    }

    // const show=async()=>{
    //     const list=await contract.allNgoList();
    //     console.log(list)
    // }

  return (
    <>
    <form className='m-2 p-2 bg-sky-900' onSubmit={saveInfo}>
        <div className='p-2 m-2 flex justify-evenly'>
        <label htmlFor="name" className='text-white text-bold'>Name:</label>
        <input type="text" name='name' id='name'
        className='mx-2 p-2 outline-none bg-slate-100 rounded-md'/>
        </div>

    {/* <div className='p-2 m-2 flex flex-col justify-evenly'>
        <label htmlFor="desc" className='text-white text-bold text-center p-2'>Description of Organization:</label>
        <textarea name='desc' id='desc'
        className='mx-2 p-2 outline-none bg-slate-100 rounded-md w-full'/>
        </div> */}

        <div className='p-2 text-white cursor-pointer  flex justify-center'>
            <button type="submit" className='p-4 rounded-md bg-sky-400'>Add NGO</button>
        </div>
    </form>
    {/* <button onClick={show}> Show all ngo list</button> */}
    </>
  )
}

export default AddNGO