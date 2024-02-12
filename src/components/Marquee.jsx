import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".001"
      className="w-full pt-20 pb-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] relative ">
      <div className="border-t-[1px] border-b-[1px] border-zinc-300 flex  whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase  font-medium -mb-[7vw] pt-4 pl-20">
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 10 }}
          className="text-[22vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase font-medium -mb-[7vw] pt-4 pl-20">
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
