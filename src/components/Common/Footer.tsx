import React from "react";
import navLinks from "@/../public/data/link";
import CustomLink from "@/components/Common/CustomLink";
import Link from "next/link";
import { SiAltiumdesigner } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-200 py-10 text-sm">
      <div className="w-11/12 md:w-10/12  mx-auto flex flex-col items-center sm:flex-row gap-x-5 2xl:gap-x-[30vw] sm:items-start sm:justify-center flex-wrap">
        <div id="logo" className="">
          <div className="text-4xl p-10 flex items-center justify-center sm:justify-start">
            <SiAltiumdesigner />
            <span className="ml-2">Designity</span>
          </div>
        </div>

        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-20 gap-y-10 w-full">
          <div id="links" className="flex flex-col gap-5 items-center">
            <h2 className="text-base uppercase tracking-wide font-light">
              Quick Links
            </h2>
            <nav className="flex flex-col gap-1 mt-[-10px]">
              {navLinks?.map((link) => (
                <li className="list-none" key={link.title}>
                  <CustomLink href={link.path}>{link.title}</CustomLink>
                </li>
              ))}
            </nav>
          </div>

          <div id="contact" className="flex flex-col gap-3 items-center sm:items-start">
            <h2 className="text-base uppercase tracking-wide font-light">
              Contact
            </h2>
            <div className="flex gap-5 [&>*]:text-lg w-full justify-center sm:justify-start">
              <Link target="_blank" href="https://www.linkedin.com">
                <FaLinkedin className="hover:text-primary" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/teamify.in/">
                <FaInstagram className="hover:text-primary" />
              </Link>
              <Link target="_blank" href="https://twitter.com">
                <FaTwitter className="hover:text-primary" />
              </Link>
            </div>
            <div className="mt-3">OR</div>
            <div className="italic mt-2">
              <CustomLink href="mailto:designity.dev@gmail.com">
                designity.dev@gmail.com
              </CustomLink>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
