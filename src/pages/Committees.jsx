import React from 'react'
import CommitteeCard from '../components/CommitteeCard'
import { COMMITTEES } from '../constants/Const'
const Committees = () => {
  return (
    <>
    <section className="bg-[#000] text-[#fff] flex flex-col justify-center items-center py-36 gap-4">
             <h1 className='text-4xl text-[white] font-bold'>Committees</h1>
             <main className="bg-[#000] text-[#fff] flex items-center justify-center flex-wrap gap-4  md:mx-[100px] rounded-xl">

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