import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotateLeftEye, setRotateLeftEye] = useState(0);
  const [rotateRightEye, setRotateRightEye] = useState(0);

  useEffect(() => {
    const lineLeft = document.querySelector('.line');
    const lineRight = document.getElementsByClassName('line')[1];

    const rectY = lineLeft.getBoundingClientRect().top;
    const rectX = lineLeft.getBoundingClientRect().left;

    const rectY2 = lineRight.getBoundingClientRect().top;
    const rectX2 = lineRight.getBoundingClientRect().left;

    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - rectX;
      let deltaY = mouseY - rectY;
      // let deltaX = mouseX - window.innerWidth / 2;  // to determine difference from the middle pointe of the window
      // let deltaY = mouseY - window.innerHeight / 2;

      let deltaX2 = mouseX - rectX2;
      let deltaY2 = mouseY - rectY2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotateLeftEye(angle - 180);

      let angle2 = Math.atan2(deltaY2, deltaX2) * (180 / Math.PI);
      setRotateRightEye(angle2 - 180);
    });
  });

  return (
    <div className="w-full h-[105vh] overflow-hidden mt-[550px]">
      <div
        data-scroll
        data-scroll-speed="-.9"
        className="w-full h-full bg-[url('../images/eyesbg.jpg')] bg-cover bg-center relative">
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotateLeftEye}deg)` }}
                className={`line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex justify-center items-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotateRightEye}deg)` }}
                className={`line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}>
                <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
