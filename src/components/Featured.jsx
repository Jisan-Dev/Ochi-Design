import React from 'react';

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight font-['Neue_Montreal']">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className='absolute z-10 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Bebas_Neue"] text-8xl leading-none'>
              {'FYDE'.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="../images/Featured1.png" alt="" />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className='absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] font-["Bebas_Neue"] text-8xl leading-none'>
              {'VISE'.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img className="w-full h-full object-cover" src="../images/Featured2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
