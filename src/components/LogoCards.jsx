import React from 'react';

const LogoCards = ({ children }) => {
  return (
    <div>
      <div className="w-full h-screen bg-zinc-100 px-16 flex items-center gap-4 sticky top-0">
        <div className="cardcontainer h-[56vh] w-1/2 ">
          <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
            <img className="w-36" src="../images/logo001.svg" alt="" />
            <button className="absolute bottom-6 left-6 px-4 py-2 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full font-normal text-sm font-Neue uppercase">
              ©2019–2022
            </button>
          </div>
        </div>
        <div className="cardcontainer h-[56vh] w-1/2 flex gap-4 ">
          <div className="relative card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
            <img className="w-32" src="../images/logo002.svg" alt="" />
            <button className="absolute bottom-6 left-6 px-4 py-2 border-[1px] border-zinc-400 rounded-full font-normal text-sm font-Neue uppercase">
              rating 5.0 on clutch
            </button>
          </div>
          <div className="relative card rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center">
            <img className="w-32" src="../images/logo003.png" alt="" />
            <button className="absolute bottom-6 left-6 px-4 py-2 border-[1px] border-zinc-400 rounded-full font-normal text-sm font-Neue uppercase">
              business bootcamp alumni
            </button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default LogoCards;
