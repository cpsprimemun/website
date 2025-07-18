import React from 'react'
import AgendaCard from '../components/AgendaCard'
import { AGENDAS } from '../constants/Const'
const Agendas = () => {
  return (
    <>
    <section className="bg-[#000] text-[#fff] flex flex-col justify-center items-center py-36 gap-4">
             <h1 className='text-4xl text-[white] font-bold'>Agendas</h1>
             <main className="bg-[#000] text-[#fff] flex items-center justify-center flex-wrap gap-4  md:mx-[100px] rounded-xl">

        {
               AGENDAS.map((agenda, index) => (
               <AgendaCard key={index} comName={agenda.com} logo={agenda.logo}/>
            ))
        }
        </main>
    </section>

    </>

  )
}

export default Agendas