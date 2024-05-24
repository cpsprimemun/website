import React, { useEffect, useRef, useState } from 'react'
import Tag from '../components/Tag'
import Timer from '../components/Timer'
import dayjs, { duration } from 'dayjs'
import { CLIENTS,} from '../constants/Const'
import TextReveal from '../components/TextReveal'
import ExeBoard from '../components/ExeBoard'
import PreviousMUN from '../components/PreviousMUN'
import Secgen from '../components/Secgen'

const Home = () => {
    const today = dayjs()

    const endDate = today.add(59 , 'day').endOf('day')

    const containerRef = useRef(null);
    
    const prevMUNContainer = document.getElementById("previous-mun-photos")

   

    
    

  return (
    <>
    <main className='bg-[#000] text-[#fff] flex flex-col justify-center items-center my-36 gap-4	ml-[100px] mr-[100px]'>
        <Tag/>
        <h1 className='font-bold	text-[#fff] text-8xl '><span className='text-cps-gold'>Conquer</span> From Within</h1>
        <p className='text-lg'>Welcome to CPS Prime MUN, Chennai Public Schools’s Annual MUN Conference</p>
        <div className='flex gap-8 my-4'>
        <button className='cps-un-silver-btn text-lg' onClick={()=>{prevMUNContainer?.scrollIntoView({ behavior: 'smooth' });}}>Explore</button>

            <button className='cps-un-gold-btn text-lg'>Register</button>

        </div>
        <Timer endDate={endDate}/>

        <p className='text-lg mt-8 text-cps-grey font-bold'>Supported By</p>
        
        <div ref={containerRef}
      className=" flex items-center justify-center w-full max-h-[90px]">
             {
                        
                        [...Array(2)].map((arr, i) => (
                            <div key={i} className='flex flex-nowrap animate-slide'>
                                {
                                    CLIENTS.map((client) => (
                                        <div key={client.alt} className='relative w-[200px] m-10 shrink-0 flex items-center'>
                                            <img src={client.logo} alt={client.alt} className='object-contain max-w-none w-[100px]' />
                                        </div>
                                    ))
                                }
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

    <section className='flex flex-col justify-center items-center gap-4 mt-12 p-2' >
    <h1 className='font-bold mb-10 text-3xl md:text-5xl text-center w-full'>
        Event Stalls
        </h1>        
        <div ref={containerRef}
      className=" flex items-center justify-center w-full max-h-[90px]">
             {
                        
                        [...Array(2)].map((arr, i) => (
                            <div key={i} className='flex flex-nowrap animate-slide'>
                                {
                                    CLIENTS.map((client) => (
                                        <div key={client.alt} className='relative w-[200px] m-10 shrink-0 flex items-center'>
                                            <img src={client.logo} alt={client.alt} className='object-contain max-w-none w-[100px]' />
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
    
    </div>
    </section>

    <section className='flex flex-col justify-center items-center gap-4 mt-6 p-2' >
        <h1>
            Quick Links
        </h1>
        <div className='flex gap-4 justify-center items-center bg-cps-black rounded-full shadow-md shadow-cps-gold p-4 '>
                    <a href='/committees'><button className='cps-un-gold-btn'>Committees</button></a>
                    <a href="https://drive.google.com/drive/folders/1qrXcP74dEISfkmhTXWZnRPldA2VdOAap?usp=sharing"><button className='cps-un-silver-btn'>Other Resources</button></a>
                    <a href='https://drive.google.com/drive/folders/1qiz8caGgf-br03Ym4AorA01VFLrb88iA?usp=sharing'><button className='cps-un-gold-btn'>Background Guides</button></a>
                    <a href="/contact"><button className='cps-un-silver-btn'>Contact Us</button></a>
        </div>
        
    </section>


    

    </main>
</>
  )
}

export default Home