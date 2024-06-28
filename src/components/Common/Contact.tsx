"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import contactImg from "@/../public/assets/Contact/contact.svg";
import Input from "./Input";
import { toast } from "react-hot-toast";

import { contactData } from "../../../public/data/contactData";
import Button from "./Button";
import CustomLink from "./CustomLink";
import axios from "axios";
const Contact = () => {
  

  let message = {
    id: 'message',
    type: "text",
    required: false,
    label: "Basic Description of job",
    placeholder:"Briefly describe your project or task.",

}

  const [formData, setFormData] = React.useState({
    fullName: "",
    name: "",
    email: "",
    location: "",
    work: "",
    domain: "",
    message: "",
  });

 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData);
   try {
    const res = await axios.post("https://sheet.best/api/sheets/6fa73d76-5f22-4d0b-af27-007481733894", formData);
    toast.success("Message sent successfully!")
   } catch (error) {
    toast.error("Something went wrong, please try again later!")
   }
    setFormData({
      fullName: "",
      name: "",
      email: "",
      location: "",
      work: "",
      domain: "",
      message: "",
    });
  }
  const isEmpty = formData.message.trim() === "";
  return (
    <section className=" sectionContainer mx-auto  flex flex-col  md:flex-row items-center md:items-start justify-center w-11/12 gap-x-8">

      <div className=" flex-col gap-5  md:w-[40%] lg:w-[45%] md:flex hidden w-4/5">
        <h2 className="text-3xl md:text-2xl  text-dark font-medium uppercase tracking-wide	">
          Contact us
        </h2>
        <Image src={contactImg} className="flip " loading="lazy" alt="" />
        <div id="socials"></div>
        <div className="flex flex-col gap-1">
          <div>Mail us at</div>
          <div className=" italic">
            <CustomLink href="mailto:connect@teamify.in">
              connect@teamify.in
            </CustomLink>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-3 items-start w-full">
        <div
          id="basicInfo"
          className="flex flex-col gap-2 border-b-2 border-gray-300 pb-2 w-full"
        >
          <h3 className=" font-medium ">Basic Information</h3>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            {contactData.BasicInfo?.map((input, idx) => {
              return (
                <Input
                  key={idx}
                  inputDetails={input}
                  setFormData={setFormData}
                  formData={formData}
                />
              );
            })}
          </div>
        </div>

        <div
          id="companyInfo"
          className="flex flex-col gap-2 border-b-2 border-gray-300 pb-2 w-full"
        >
          <div className="flex gap-3 items-center">
            <h3 className=" font-medium ">Company Information</h3>
            <span className="  text-gray-400 text-xs font-light text-end">
              (optional)
            </span>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 ">
            {contactData.Company?.map((input, idx) => {
              return (
                <Input
                  key={idx}
                  inputDetails={input}
                  setFormData={setFormData}
                  formData={formData}
                />
              );
            })}
          </div>
        </div>

        <div
          className=" flex flex-col gap-3 border-b-2 border-gray-300 pb-2 w-full"
          id="TextArea"
        >
          <div className="flex gap-3 items-center">
            <h3 className=" font-medium ">Job Information</h3>
            <span className="  text-gray-400 text-xs font-light text-end">
              (optional)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">



            {contactData.JobDesc?.map((input, idx) => {
              return (
                <Input
                  key={idx}
                  inputDetails={input}
                  setFormData={setFormData}
                  formData={formData}
                />
              );
            })}

<div className="flex flex-col relative z-0 w-full">
      
      <label className=" text-dark" htmlFor={message.id}>{message.label}</label>
      <textarea
        className=" focus:outline-none  resize-none  text-dark w-full bg-gray-100  h-[100px] mb-4 px-2 py-1 rounded-md "
        // cols={}
        
        required={message.required}
        id={message.id}
        name={message.id}
        placeholder={message.placeholder}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, message: e.target.value }))
        }
        value={formData.message}
      />
    </div>


          </div>

        </div>


        <div className=" ">
          <Button text="Send Message" type="submit" primary={true} />
        </div>
      </form>
    </section>
  );
};

export default Contact;
