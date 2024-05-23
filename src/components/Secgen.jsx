import React from 'react'

const Secgen = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-4 mt-12 p-2' >

    <div className='border-2 border-cps-grey p-4 rounded-xl bg-white flex gap-4'>
            <div className='w-[70%] flex flex-col justify-evenly'>
                <h1  className='text-2xl'>
                    John DOe
                </h1>
                <h3 className='font-bold text-cps-grey text-3xl'>Secretary General</h3>
                <p className='font-regular text-base opacity-35	'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed porta mi in eros hendrerit pulvinar. Aenean lobortis ante vel ligula laoreet, in molestie odio vulputate. 
                Nullam consectetur facilisis consequat. Nam semper commodo augue, non dapibus libero dictum sit amet. 
                Nam efficitur velit lectus, ut pharetra felis maximus a. Etiam et nunc hendrerit, tempus tortor et, 
                cursus lorem. Sed vestibulum libero ut laoreet dignissim. Aenean hendrerit tortor vitae dignissim ultricies. 
                Vivamus pretium rutrum tincidunt. Curabitur volutpat nisi vel enim viverra scelerisque. Donec vitae ante blandit, 
                consectetur odio eget, vehicula ipsum.
                </p>
                <br></br>
                <h1 className='text-cps-black font-bold text-4xl'>CPS Prime MUN 3.0</h1>

            </div>
            <div className='w-[30%] flex items-center justify-center shadow-lg shadow-[#1111F1]'>
                <img src="https://i.postimg.cc/bwPH8hJ7/Untitled-design-7.webp" alt="Secretary General" className='rounded-md' />
            </div>


        </div>

    </section>
  )
}

export default Secgen