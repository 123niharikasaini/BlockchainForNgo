import { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ethers } from 'ethers'
import abi from "./contractJSON/ngo.json"
import {userContext} from './context/MetaMaskContext'



function App() {

  const {setState,account,setAccount}=useContext(userContext)
  // const account=useContext(userContext)
  // const setAccount=useContext(userContext)


  useEffect(()=>{
    const template=async()=>{
      const contractAddress="0xe7ff7C1EBbCFDe188261561dB3e0fB14d262E9d8";
      const contractABI=abi.abi;

      try{
      const {ethereum}=window;
      const account=await ethereum.request({
        method:"eth_requestAccounts"
      })
      setAccount(account);

      const provider=new ethers.providers.Web3Provider(ethereum)
      const signer=provider.getSigner();

      const contract=new ethers.Contract(contractAddress,contractABI,signer)

      setState({provider,signer,contract})

    }
    catch(error){
      console.log(error)
    }
    }
    template();
  },[])

  // console.log(state)
  // console.log(account)


  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
