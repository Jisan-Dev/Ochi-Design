import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: '0' });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight font-['Neue_Montreal']">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className='absolute z-10 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Bebas_Neue"] text-8xl leading-none flex overflow-hidden'>
              {'FYDE'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block">
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="../images/Featured1.png" alt="" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Bebas_Neue"] text-8xl leading-none flex overflow-hidden'>
              {'VISE'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block">
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="../images/Featured2.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
