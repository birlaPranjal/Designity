"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./../../components/ui/text-generate-effect";
import designdemo from '@/../public/assets/designdemo.svg'
import  Image from 'next/image'
import designify from "../../../public/data/designify";
import { CardContainer, CardItem } from "./../../components/ui/3d-card";
import {Accordion , AccordionContent , AccordionItem , AccordionTrigger} from "@/components/ui/accordion";

export default function Page() {
  const [showCards, setShowCards] = useState(false);
  const content: { [key: string]: { title: string; description: string; image: { designdemo: any; }; } } = designify.content;
  const prizes = designify.prizes;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCards(true);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="h-auto min-h-screen bg-dark relative ">
      <BackgroundBeams className="absolute inset-0 z-10" />
      <div className="relative z-20 text-white">
      <TextGenerateEffect
        words="hello welcome to Designify"
        className="text-white"
      />

      <div className="text-center ms:scale-[0.5] lg:scale-[1.6] lg:w-[600px] md:w-[600px] mx-auto my-5 md:my-16 lg:my-32 ">
        <h1 className="text-9xl font-bold text-blue-500 lg:w-[600px] md:w-[600px] mx-auto ">36</h1>
        <h2 className="text-4xl mt-4 lg:w-[600px] md:w-[500px]  mx-auto">HOURS OF ...</h2>
        <div className="lg:w-[600px] md:w-[600px]  mx-auto">
        <span >DESIGNING / BUILDING / CODING / HACKING</span>
        <br />
        <span>NETWORKING / FRIENDS / MENTORS / COMPETITIONS</span>
        <br />
        <span> AND A WHOLE LOT MORE </span>
        </div>
      </div>

      <div className="text-white py-16 w-[70vw] mx-auto">
      <h2 className="text-center text-5xl font-bold mb-12 md:text-5xl lg:text-6xl font-mono">
        Prizes & Swags
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
        {prizes.map((item) => (
          <div key={item.id} className="relative group h-96 w-full md:w-1/3 overflow-hidden flex-shrink-0">
            <div
              className={`bg-gradient-to-r ${item.background} rounded-lg p-8 text-center transform transition-all duration-1000 group-hover:translate-y-72 group-hover:opacity-70 h-full flex flex-col justify-between`}
            >
              <h3 className="text-6xl font-bold -mt-5">{item.id}</h3>
              <div>
                <p className="mt-4 text-lg">{item.prize}</p>
                <p className="mt-2">Tap on Card to know more</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 rounded-lg p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div>
                <h3 className="text-2xl font-bold">{item.details || "SURPRISE!"}</h3>
                {item.credits ? (
                  <ul className="mt-4 list-disc list-inside">
                    {item.credits.map((credit, index) => (
                      <li key={index}>{credit}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-lg">Congratulations! You&apos;ve found the hidden prize!</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-white p-10">
    <div className="flex flex-col space-y-10">
      {Object.keys(content).map((key, index) => {
        const section = content[key];
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
          >
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-1/2">
                  <CardContainer containerClassName="w-full">
                    <CardItem
                      className="shadow-lg rounded-lg md:h-[20vw] mx-auto w-[80vw] md:w-[40vw]"
                      translateZ={30}
                    >
                      <Image
                        src={designdemo}
                        alt=""
                        className="rounded-lg w-[80vw] md:w-[40vw] md:h-[20vw]"
                      />
                    </CardItem>
                  </CardContainer>
                </div>
                <div className="mx-auto w-[80vw] md:w-1/2">
                  <h3 className="text-2xl font-bold text-center">
                    {section.title}
                  </h3>
                  <p className="text-lg font-light text-justify p-5">
                    {section.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-1/2 md:order-2">
                  <CardContainer containerClassName="w-full">
                    <CardItem
                      className="shadow-lg rounded-lg md:h-[20vw] mx-auto w-[80vw] md:w-[40vw]"
                      translateZ={30}
                    >
                      <Image
                        src={designdemo}
                        alt=""
                        className="rounded-lg w-[80vw] md:w-[40vw] md:h-[20vw]"
                      />
                    </CardItem>
                  </CardContainer>
                </div>
                <div className="mx-auto w-[80vw] md:w-1/2 md:order-1">
                  <h3 className="text-2xl font-bold text-center">
                    {section.title}
                  </h3>
                  <p className="text-lg font-light text-justify p-5">
                    {section.description}
                  </p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  </div>

      <div className='mt-16 '>
        <div className='text-4xl font-mono sm:text-5xl lg:text:8xl w-[90vw]  mx-auto mb-5 text-center '>Frequently Asked Questions</div>
        <Accordion type="single" collapsible className="w-[95vw] sm:w-[60vw] mx-auto">
        {Object.keys(designify.faqs).map((faqKey: keyof typeof designify.faqs, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{designify.faqs[faqKey].question}</AccordionTrigger>
          <AccordionContent>
            {designify.faqs[faqKey].answer}
          </AccordionContent>
          </AccordionItem>
        ))}
        </Accordion>
      </div>
      </div>
      <div className="h-20"></div> 
    </div>
    );
}
