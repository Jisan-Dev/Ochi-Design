import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {['we create', 'eye-opening', 'presentations'].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex overflow-hidden">
              {index === 1 && (
                <div className=" mr-[1vw] w-[9vw] rounded-md bg-green-500 h-[5.7vw] relative top-[0.8vw]"></div>
              )}
              <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] font-['Founders_Grotesk_X_Condensed'] font-medium leading-[.70]">
                {item}
              </h1>
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
