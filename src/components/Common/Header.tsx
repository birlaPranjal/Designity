"use client";

import React from "react";
import navLinks from "@/../public/data/link";
import { useState } from "react";
import Link from "next/link";
import CustomLink from "@/components/Common/CustomLink";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SiAltiumdesigner } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-4 shadow-md h-[3.8rem] top-0 fixed w-screen z-50 bg-dark text-white">
      <div className="w-10/12  mx-auto flex items-center justify-between">
      <Link href="/" className="w-10/12 mx-auto md:mx-0 md:w-[60%]">
            <div className='text-2xl flex'><SiAltiumdesigner />Designity</div>
            </Link>
        <nav className=" gap-5 hidden sm:flex sm:mr-[60px] ">
          {navLinks?.map((link) => (
            <li className="list-none" key={link.title}>
              <CustomLink href={link.path}>{link.title}</CustomLink>
            </li>
          ))}
          {session && (
            <CustomLink href="/profile">
              Profile
            </CustomLink>
          )}
          {!session && (
            <CustomLink href="/sign-in">
              Sign In
            </CustomLink>
          )}
          {session && (
            <>
              <CustomLink href="/signout">
              Sign Out
            </CustomLink>
            </>
          )}
        </nav>

        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {!isOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="pt-2 "
              >
                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
              </svg>
            )}
            {isOpen && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                className="pt-2 "
                viewBox="0 0 40 50"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            )}
          </button>

          {isOpen && (
            <div className="absolute text-dark bg-light shadow-md-b w-full top-[3.5rem] shadow-md left-0 z-50 ">
              <nav className="flex flex-col justify-center items-center space-y-4 px-4 pt-6 pb-8 ">
                {navLinks?.map((link) => (
                  <li className="list-none" key={link.title}>
                    <CustomLink href={link.path}>{link.title}</CustomLink>
                  </li>
                ))}
                {session && (
            <CustomLink href="/profile">
              Profile
            </CustomLink>
          )}
          {!session && (
            <CustomLink href="/sign-in">
              Sign In
            </CustomLink>
          )}
          {session && (
            <>
              <CustomLink href="/signout">
              Sign Out
            </CustomLink>
            </>
          )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;