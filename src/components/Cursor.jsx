import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX: posX, clientY: posY } = e;

      setMousePosition({
        x: posX,
        y: posY,
      });

      // Apply the animation to the cursor outline
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          {
            duration: 500,
            fill: 'forwards',
          }
        );
      }
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <div
        className='cursor-dot'
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '5px',
          height: '5px',
          backgroundColor: '#DCA843',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className='cursor-outline'
        ref={cursorOutlineRef}
        style={{
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          pointerEvents: 'none',
          width: '30px',
          height: '30px',
          border: '2px solid #BABABA',
          borderRadius: '50%',
          backgroundColor: 'transparent',
        }}
      ></div>
    </>
  );
};

export default Cursor;
