import React from 'react'
import Row from './Row'

const Donate = () => {
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

        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
        <Row name="ABC" purpose="For Children" amt="12000" date="15 March 2024" action="Donate"/>
          

        </table>
    </div>
    </>
  )
}

export default Donate