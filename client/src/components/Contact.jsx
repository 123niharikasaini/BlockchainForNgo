import React from 'react'
import contactImg from "../assets/contact.png"

const Contact = () => {
  return (
    <>
      <div className='p-4 bg-yellow-400 border-b-2 border-sky-950'>
        <div className='capitalize text-center text-4xl
       font-bold text-sky-950  rounded-md'>Contact Us</div>

        <div className='flex p-2'>
          <span className='p-2 basis-[40%]'>
            <img src={contactImg} alt="." />
          </span>
          <span className='p-4 flex '>
            <form action="">

              <div className='p-2 '>
                <label for="name" className='text-xl font-serif flex justify-between'>
                  <span>Name:</span>
                <input type="text" name='name' 
                className='bg-yellow-100 px-2 rounded-md'/></label>
              </div>

              <div className='p-2 '>
                <label for="email"className='text-xl font-serif flex justify-between'>
                  Email:
                <input type="email" name='email'
                className='bg-yellow-100 px-2 rounded-md' /></label>
              </div>

              <div className='p-2'>
                <label for="contact" className='text-xl font-serif flex justify-between'>
                  Contact No. :
                <input type="number" name='contact'
                className='bg-yellow-100 px-2 rounded-md' /></label>
              </div>

              <div className='p-2'>
                <label for="msg" className='text-xl font-serif flex flex-col justify-between'>
                  Message:
                <textarea name="msg" id="msg" cols="50" rows="5"
                className='bg-yellow-100 px-2 rounded-md'></textarea></label>
              </div>
              
              <div className='text-center m-2 font-bold'>
              <button type='submit' className='w-[20%] p-2 bg-sky-950 rounded-xl text-white
              text-center hover:shadow-2xl hover:bg-slate-200 hover:text-sky-950'>Send</button>
              </div>
            </form>
          </span>
        </div>
      </div>
    </>
  )
}

export default Contact