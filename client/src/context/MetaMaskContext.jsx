import React, { createContext,useState } from 'react'

const userContext=createContext();

 const MetaMaskContext = ({children}) => {
    const [state,setState]=useState({
        provider:null,
        signer:null,
        contract:null,
      })
      const [account,setAccount]=useState("Not Connected")
  return (
    <userContext.Provider value={{state,setState,account,setAccount}}>
        {children}
    </userContext.Provider>
  )
}

export default MetaMaskContext
export {userContext};