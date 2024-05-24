import React from 'react'
import CommitteeCard from '../components/CommitteeCard'
import { COMMITTEES } from '../constants/Const'
const Committees = () => {
  return (
    <>
    <section className="bg-[#000] text-[#fff] flex flex-col justify-center items-center my-36 gap-4">
             <h1 className='text-4xl text-[white] font-bold'>Committees</h1>
             <main className="bg-[#000] text-[#fff] grid grid-cols-3 auto-rows-fr gap-4  ml-[100px] mr-[100px] rounded-xl">

        {
            COMMITTEES.map((committee) => (
               <CommitteeCard comName={committee.com} logo={committee.logo}/>
            ))
        }
        </main>
    </section>

    </>

  )
}

export default Committees