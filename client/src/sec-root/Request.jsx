import React from 'react'

const Request = () => {
    return (
        <>
            <div className='bg-sky-950 text-white p-10 m-2'>
                <form action="">

                    <div className='p-2 '>
                        <label for="name" className='text-xl font-serif flex justify-between'>
                            <span>NGO's Name:</span>
                            <input type="text" name='name'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2 '>
                        <label for="email" className='text-xl font-serif flex justify-between'>
                            Email:
                            <input type="email" name='email'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2'>
                        <label for="contact" className='text-xl font-serif flex justify-between'>
                            Contact No. :
                            <input type="number" name='contact'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2 '>
                        <label for="purpose" className='text-xl font-serif flex justify-between'>
                            <span>Purpose for donation:</span>
                            <input type="text" name='purpose'
                                className='w-[60%] text-black bg-slate-100 px-2 rounded-md' /></label>
                    </div>

                    <div className='p-2'>
                        <label for="detail" className='text-xl font-serif flex flex-col justify-between'>
                            Details:
                            <textarea name="detail" id="detail" cols="50" rows="5"
                                className='text-black bg-slate-100 px-2 rounded-md'></textarea></label>
                    </div>

                    <div className='p-2 '>
                        <label for="amt" className='text-xl font-serif flex justify-evenly'>
                            <span>Amount:</span>
                            <input type="number" name='amt'
                                className='text-black bg-slate-100 px-2 rounded-md' defaultValue={0}/></label>
                    </div>

                    <div className='p-2 '>
                        <label for="deadline" className='text-xl font-serif flex justify-evenly'>
                            <span>Deadline:</span>
                            <input type="date" name='purpose'
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