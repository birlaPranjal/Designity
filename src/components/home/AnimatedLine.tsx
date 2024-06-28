import React from "react";

const AnimatedLine = () => {
  let arr = ["Marketing", "Hiring", "Outsourcing"];
  
  return (
    <div className="flex gap-1 sm:text-3xl text-[1.0343rem] md:text-4xl lg:text-[3.30rem] mx-auto md:my-7 my-5 ">
      <span className="mt-1">A lot more than just</span>
      <div className=" max-h-7 sm:max-h-11 md:max-h-14 lg:max-h-16 overflow-y-hidden sm:ml-2">
      <div id="scroller" className="flex flex-col  tag-line-animate  ">
        <span className="pt-1 pb-5">Marketing</span>
        <span className="pt-1 pb-5">Hiring</span>
        <span className="pt-1 pb-5">Outsourcing</span>
      </div>
      </div>
    </div>
  );
};

export default AnimatedLine;
