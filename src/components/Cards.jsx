import React from 'react';

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 px-16 flex items-center gap-4">
      <div className="cardcontainer h-[60vh] w-1/2">
        <div className="card rounded-xl w-full h-full bg-[#004D43]">
          <img src="../images/logo001.svg" alt="" />
        </div>
      </div>
      <div className="cardcontainer h-[60vh] w-1/2 flex gap-4">
        <div className="card rounded-xl w-1/2 h-full bg-[#212121]">
          <img src="../images/logo002.svg" alt="" />
        </div>
        <div className="card rounded-xl w-1/2 h-full bg-[#212121]">
          <img src="../images/logo003.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
