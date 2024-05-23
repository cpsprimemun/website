import React from 'react'
import Tag from '../components/Tag'
import Cursor from '../components/Cursor'
import Timer from '../components/Timer'
import dayjs from 'dayjs'

const Home = () => {
    const today = dayjs()

    const endDate = today.add(59 , 'day').endOf('day')

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
    </main>
  )
}

export default Home