import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { OC1,OC2,OC3,OC4} from '../constants/Const';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OCMembers = () => {
  const eb1Ref = useRef(null);
  const eb2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      eb1Ref.current.children,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: eb1Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: false,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      eb2Ref.current.children,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: eb2Ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: false,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
     
      <section className="bg-[#000] text-[#fff] flex flex-col justify-center items-center py-36 gap-4">
             <h1 className='text-4xl text-[white] font-bold'>Meet the Executive board</h1>
       </section>
      <section id="container" className='justify-center'>
        <div ref={eb1Ref} className="image-container mb-24 md:flex hidden">
          {OC1.map((member, index) => (
            <div
              key={index}
              className="img font-allotrix-font-secondary"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="img-label">
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap gap-3 items-center justify-center md:hidden'>
          {OC1.map((member, index) => (
            <div key={index} className='relative w-[170px] h-[170px] rounded-lg'>
                <img className='w-full h-full rounded-lg object-cover' src={member.img} alt="AV" />

              <div className='absolute bottom-2 text-md bg-[white] text-[black] px-2 rounded-r-md font-allotrix-font-secondary'>
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="container" className='mb-24 justify-center'>
        <div ref={eb2Ref} className="image-container md:flex hidden">
          {OC2.map((member, index) => (
            <div
              key={index}
              className="img font-allotrix-font-secondary"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="img-label">
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap gap-3 items-center justify-center md:hidden'>
          {OC2.map((member, index) => (
            <div key={index} className='relative w-[170px] h-[170px] rounded-lg'>
                <img className='w-full h-full rounded-lg object-cover' src={member.img} alt="AV" />

              <div className='absolute bottom-2 text-md bg-[white] text-[black] px-2 rounded-r-md font-allotrix-font-secondary'>
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        
      </section>
      <section id="container" className='mb-24 justify-center'>
        <div ref={eb2Ref} className="image-container md:flex hidden">
          {OC3.map((member, index) => (
            <div
              key={index}
              className="img font-allotrix-font-secondary"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="img-label">
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap gap-3 items-center justify-center md:hidden'>
          {OC3.map((member, index) => (
            <div key={index} className='relative w-[170px] h-[170px] rounded-lg'>
                <img className='w-full h-full rounded-lg object-cover' src={member.img} alt="AV" />

              <div className='absolute bottom-2 text-md bg-[white] text-[black] px-2 rounded-r-md font-allotrix-font-secondary'>
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="container" className='mb-24 justify-center'>
        <div ref={eb2Ref} className="image-container md:flex hidden">
          {OC4.map((member, index) => (
            <div
              key={index}
              className="img font-allotrix-font-secondary"
              style={{ backgroundImage: `url(${member.img})` }}
            >
              <div className="img-label">
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap gap-3 items-center justify-center md:hidden'>
          {OC4.map((member, index) => (
            <div key={index} className='relative w-[170px] h-[170px] rounded-lg'>
                <img className='w-full h-full rounded-lg object-cover' src={member.img} alt="AV" />

              <div className='absolute bottom-2 text-md bg-[white] text-[black] px-2 rounded-r-md font-allotrix-font-secondary'>
                <h2>{member.name}</h2>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
  );
};

export default OCMembers;
