import React from "react";
import Image from "next/image";
import Button from "../Common/Button";
import CustomLink from "../Common/CustomLink";
import { FaArrowRight, FaArrowsLeftRight } from "react-icons/fa6";

type serviceCardProps = {
  service: {
    title: string;
    description: Array<string>;
    img: any;
    CTA: string;
  };
};

const ServiceCard = ({ service }: serviceCardProps) => {
  return (
    <div className="border shadow-md hover:drop-shadow-md relative border-slate-100 rounded-lg p-6 w-10/12 md:w-[47%] lg:w-[30%] lg:mx-2  flex flex-col gap-5 items-start justify-center bg-[#fdfdff]">
      <div className="absolute border-slate-200 top-1 mt-[-24px] bg-[#fcfcff] border  p-2 rounded-full">
        <Image
          src={service.img}
          alt={service.title}
          className="  "
          width={25}
        />
      </div>
      <h3 className="text-md tracking-wide uppercase  mt-3">{service.title}</h3>
      <ul className="ml-[2px] flex flex-col gap-1">
        {service.description.map((desc, i) => (
          <li key={i} className="text-sm">&#8226; {desc}</li>
        ))}
      </ul>
      <div className="text-primary">
        <CustomLink href="/contact">
          {service.CTA}
          <FaArrowRight />
        </CustomLink>
      </div>
    </div>
  );
};

export default ServiceCard;
