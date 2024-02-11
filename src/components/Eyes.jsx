import React from 'react';

const Eyes = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full bg-[url('../images/eyesbg.jpg')] bg-cover bg-center relative">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full"></div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
