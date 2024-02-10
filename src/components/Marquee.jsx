import React from 'react';

const Marquee = () => {
  return (
    <div className="w-full pt-20 pb-16 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-[1px] border-b-[1px] border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
        <h1 className="text-[22vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase  font-medium -mb-[7vw] pt-4">
          we are ochi
        </h1>
        <h1 className="text-[22vw] leading-none font-['Founders_Grotesk_X_Condensed'] uppercase font-medium -mb-[7vw] pt-4">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
