import React from "react";

type StepsCardProps = {
  step: {
    title: string;
    subTitle: string;
    description: string;
    step: string;
  };
};

const StepsCard = ({step}: StepsCardProps) => {
  return (
    <div className="border hover:drop-shadow-md shadow-md relative border-slate-100 rounded-lg p-6 w-10/12 md:w-[47%] lg:w-[30%] lg:mx-2  flex flex-col gap-4 items-start justify-start pt-8 bg-[#fdfdff]">
      <div className="absolute border-slate-200 top-1 mt-[-24px] bg-[#fcfcff] border  p-2 rounded-full">
        <span className="px-2">{step.step}</span>
      </div>
      <h3 className="text-md tracking-wide uppercase min-h-10 lg:min-h-[4.3rem] xl:min-h-12 ">{step.title}</h3>
      <h4 className="h-8 text-sm text-gray-600">{step.subTitle}</h4>
      <p className="mt-2 font-light">{step.description}</p>
    </div>
  );
};

export default StepsCard;
