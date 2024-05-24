import React from 'react'

const CommitteeCard = ({logo, comName}) => {
  return (
    <div className='flex flex-col m-4 p-8 gap-4 justify-center rounded-xl items-center border-2 border-cps-gold bg-transparent'>
        <img src={logo} alt="logo" className='roudned-full '/>
        <h1 className='text-2xl font-bold'>{comName}</h1>
    </div>
  )
}

export default CommitteeCard