import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './router/Router.jsx'
import  MetaMaskContext  from './context/MetaMaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MetaMaskContext>
    <RouterProvider router={router}/>
    </MetaMaskContext>
  </React.StrictMode>,
)
