import React, { useEffect, useRef, useState } from 'react'
import Tag from '../components/Tag'
import Cursor from '../components/Cursor'
import Timer from '../components/Timer'
import dayjs, { duration } from 'dayjs'
import { CLIENTS, MUNPICS,} from '../constants/Const'
import TextReveal from '../components/TextReveal'
import ExeBoard from '../components/ExeBoard'
import PreviousMUN from '../components/PreviousMUN'
import Secgen from '../components/Secgen'
const Home = () => {
    const today = dayjs()

    const endDate = today.add(59 , 'day').endOf('day')

    const containerRef = useRef(null);
    



    
    

  return (
    <main className='bg-[#000] text-[#fff] flex flex-col justify-center items-center my-36 gap-4	'>
        <Cursor/>
        <Tag/>
        <h1 className='font-bold	text-[#fff] text-8xl '><span className='text-cps-gold'>Conquer</span> From Within</h1>
        <p className='text-lg'>Welcome to CPS Prime MUN, Chennai Public Schools’s Annual MUN Conference</p>
        <div className='flex gap-8 my-4'>
        <button className='cps-un-silver-btn text-lg'>Explore</button>

            <button className='cps-un-gold-btn text-lg'>Register</button>

        </div>
        <Timer endDate={endDate}/>

        <p className='text-lg mt-8 text-cps-grey font-bold'>Supported By</p>
        
        <div ref={containerRef}
      className=" flex items-center justify-center w-full max-h-[90px]">
            {
              CLIENTS.map((client, index) => (
                <div key={index} className='relative w-[200px] mb-5 flex items-center justify-center'>
                  <img src={client.logo} alt={client.alt} draggable="false" className='object-contain max-w-none w-[80px] h-auto image' />
                </div>
              ))
            }
    
    </div>

    <hr  width="80%" className='my-8 text-cps-black'/>
    <PreviousMUN/>

   
    <hr  width="80%" className='my-8 text-cps-black'/>

    <ExeBoard/>

    <TextReveal/>
    <Secgen/>

    

    </main>
  )
}

export default Home