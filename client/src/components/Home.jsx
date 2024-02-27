import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
  return (
    <>
    <div className='bg-yellow-400'>
    <Banner/>
    <About/>
    <Services/>
    <Contact/>
    </div>
    </>
  )
}

export default Home