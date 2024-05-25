import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { EB1, EB2 } from '../constants/Const';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ExeBoard = () => {
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
      <section className='flex flex-col items-center text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4 w-full'>
        <h1 className='font-bold mb-10 text-3xl md:text-5xl text-center w-full'>
          Meet the Executive board
        </h1>
      </section>
      <section id="container" className='justify-center'>
        <div ref={eb1Ref} className="image-container mb-24 md:flex hidden">
          {EB1.map((member, index) => (
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
        <div ref={eb1Ref} className="image-container flex md:hidden">
          {EB1.slice(0,2).map((member, index) => (
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
        <div ref={eb1Ref} className="image-container flex md:hidden">
          {EB1.slice(3,5).map((member, index) => (
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
      </section>
      <section id="container" className='mb-24 justify-center'>
        <div ref={eb2Ref} className="image-container md:flex hidden">
          {EB2.map((member, index) => (
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
        <div ref={eb2Ref} className="image-container flex md:hidden">
          {EB2.slice(0,2).map((member, index) => (
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
        <div ref={eb2Ref} className="image-container flex md:hidden">
          {EB2.slice(3,5).map((member, index) => (
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
      </section>
    </>
  );
};

export default ExeBoard;
