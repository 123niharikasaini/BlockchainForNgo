import React, { useContext } from 'react'
import { userContext } from '../context/MetaMaskContext'
import { ethers } from 'ethers'


const Request = () => {

    const {account,state}=useContext(userContext)

    const makingReq=async(event)=>{
        event.preventDefault();
        const amt=event.target.amt.value;
        // const amount={value:ethers.utils.parseEther(amt)}
        console.log(amt)
        const purpose=event.target.purpose.value;
        const deadline=event.target.deadline.value;
// console.log(event.target.amt.value)
        try{
        const req=state.contract.makeRequest(amt,purpose,deadline);
        // alert(req)
        console.log(req.message)
    }
        catch(error){
            setErr
            console.log(error)
        }


    }



    return (
        <>
            <div className='bg-sky-950 text-white p-10 m-2'>
                <form onSubmit={makingReq}>

                    <div className='p-2 '>
                        <label htmlFor="name" className='text-xl font-serif flex justify-between'>
                            <span>NGO's name:</span>
                            <input type="text" name='name'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2 '>
                        <label htmlFor="address" className='text-xl font-serif flex justify-between'>
                            <span>NGO's address:</span>
                            <input type="text" name='name'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md'
                                required/></label>
                    </div>

                    <div className='p-2 '>
                        <label htmlFor="email" className='text-xl font-serif flex justify-between'>
                            Email:
                            <input type="email" name='email'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2'>
                        <label htmlFor="contact" className='text-xl font-serif flex justify-between'>
                            Contact No. :
                            <input type="number" name='contact'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2 '>
                        <label htmlFor="purpose" className='text-xl font-serif flex justify-between'>
                            <span>Purpose for donation:</span>
                            <input type="text" name='purpose'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2'>
                        <label htmlFor="detail" className='text-xl font-serif flex flex-col justify-between'>
                            Details:
                            <textarea name="detail" id="detail" cols="50" rows="5"
                                className='text-black bg-slate-100 px-2 rounded-md'></textarea></label>
                    </div>

                    <div className='p-2 '>
                        <label htmlFor="amt" className='text-xl font-serif flex justify-evenly'>
                            <span>Target Amount in ether:</span>
                            <input type="number" name='amt'
                                className='text-black bg-slate-100 px-2 rounded-md' defaultValue={0}/></label>
                    </div>

                    <div className='p-2 '>
                        <label htmlFor="deadline" className='text-xl font-serif flex justify-evenly'>
                            <span>Deadline in days:</span>
                            <input type="number" name='deadline'
                                className='text-black bg-slate-100 px-2 rounded-md cursor-pointer' /></label>
                    </div>
                    <div className='text-center mt-10'>
                    <button className='p-2 text-center bg-slate-100 text-sky-950 rounded-lg font-bold
                    hover:shadow-xl shadow-white hover:bg-white '>
                        Make Request
                    </button></div>

                </form>

                
            </div>
        </>
    )
}

export default Request