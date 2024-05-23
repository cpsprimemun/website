import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#000] text-[#fff] min-h-[100px]'>
        <h1 className='font-bold flex items-center text-3xl	p-8'>CPS Prime.</h1>
        <div className='flex gap-8 mr-16 text-lg'>
            <ul className='flex gap-4 items-center'>
                <li><a href="/" className="text-cps-grey hover:text-cps-gold font-medium transition-colors duration-300">Home </a></li>
                <li><a href="/" className="text-cps-grey hover:text-cps-gold font-medium transition-colors duration-300">Chairs </a></li>
                <li><a href="/" className="text-cps-grey hover:text-cps-gold font-medium transition-colors duration-300">Stalls </a></li>
                <li><a href="/" className="text-cps-grey hover:text-cps-gold font-medium transition-colors duration-300">Contact </a></li>
            </ul>
            <button className='cps-un-gold-btn' style={{alignSelf:"center"}}>Register</button>

        </div>
        
    </div>
  )
}

export default Navbar