import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {['we create', 'eye-opening', 'presentations'].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0, marginLeft: -10 }}
                  animate={{ width: '9vw', marginLeft: 0 }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2, delay: 1.2 }}
                  className=" mr-[1vw] rounded-md bg-[url('images/content-image01.jpg')] bg-cover h-[5.7vw] relative top-[0.8vw]"></motion.div>
              )}
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.6 }}
                className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] font-['Founders_Grotesk_X_Condensed'] font-medium leading-[.70]">
                {item}
              </motion.h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-5 px-20">
        {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
          <p key={index} className="text-base font-light tracking-wider leading-none font-Neue ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <button className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-normal text-sm font-Neue uppercase">
            START THE PROJECT
          </button>
          <div className="w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
