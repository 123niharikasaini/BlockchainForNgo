import React from 'react'
import donate from '../assets/donate2.png'
import Card from './Card'
import makeReq from '../assets/makeReq2.png'
import list from '../assets/topDonation.png'
import Donate from '../sec-root/Donate'
import Request from '../sec-root/Request'
import ListDonation from '../sec-root/ListDonation'

const Services = () => {
  return (
    <>
    <div className=' p-4 bg-yellow-400 border-sky-950 border-b-2'>
        <div className='capitalize text-center text-4xl
       font-bold text-sky-950  rounded-md'>Our Services</div>

       <div className='p-4 grid grid-cols-3 gap-4 text-center'>
        {/* cards */}
        <Card img={donate} but="Donate Now" ele={<Donate/>}/>
        <Card img={makeReq} but="Make Request for Donation" ele={<Request/>}/>
        <Card img={list} but="Top Donation List" ele={<ListDonation/>}/>
       </div>
    </div>
    </>
  )
}

export default Services