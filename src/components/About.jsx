import React from 'react';

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121] font-['Neue_Montreal']">
      <h1 className="font-['Neue_Montreal'] text-5xl tracking-tight max-w-[65rem] font-medium">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell
        products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full flex justify-between border-t-[1px] border-[#a7bb66] mt-20 pt-10">
        <div className="w-1/2">
          <h1 className="text-5xl font-medium font-['Neue_Montreal']">Our approach:</h1>
          <button className="text-sm flex gap-10 uppercase items-center px-9 py-5 bg-zinc-900 rounded-full text-white mt-8">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100 "></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a1b851] bg-[url('/images/Homepage-Photo-663x469.jpg')] bg-center"></div>
      </div>
    </div>
  );
};

export default About;
