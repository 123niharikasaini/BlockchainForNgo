import React, { useContext } from 'react'
import { userContext } from '../context/MetaMaskContext'

const MakePayment = () => {

    const {state,account}=useContext(userContext);
    const contract=state.contract;

    const making=async()=>{
        const makePayment= await contract.makePayment();
        console.log(makePayment)
    }

  return (
    <>
    <div>
        <button className='m-2 p-2 bg-green-600 rounded-md text-white
         font-bold hover:bg-green-100 hover:text-black'>
            Make Payment
        </button>
    </div>
    </>
  )
}

export default MakePayment