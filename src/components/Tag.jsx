import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Tag = () => {
  return (
    <div className='flex gap-4 border-2 border-cps-gold text-cps-grey rounded-full justify-center items-center px-4	'>
        <h1 className='text-xl'>✨</h1>
        <h1 className='w-[2px] h-[30px] m-auto text-cps-gray' >| </h1>

        <h1>
            CPS Prime MUN
        </h1>
        <FaArrowRight/>
    </div>
  )
}

export default Tag