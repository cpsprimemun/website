import React from 'react'

const Register = () => {
  return (
    <main className='bg-[#000] text-[#fff] flex flex-col justify-center items-center my-36 gap-8	ml-[100px] mr-[100px]'>
        <h1 className='text-6xl font-bold'>Choose Delegation Type</h1>
        <a href='/'>
        <button className='cps-un-gold-btn text-5xl p-8' >
                Individual Registration
            </button>
        </a>
        <a href='/'>
        <button className='cps-un-gold-btn text-5xl p-8' >
                Delegation Registration
            </button>
        </a>
    </main>
  )
}

export default Register