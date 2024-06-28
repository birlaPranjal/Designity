

import React, { use } from "react";
import cx from "classnames";
import Link from "next/link";
type ButtonProps = {
  text: string;
  onClick?: () => void;
  primary: boolean;
  href?: string;
  type?:"submit" | "reset" | "button";
};

const Button = ({ text, onClick, primary, href,type }: ButtonProps) => {

  const buttonClasses = cx({
    "hover:shadow-md":true,
    "hover:scale-95": true,
    "hover:bg-blue-600": true,
    "rounded-lg": true,
    "bg-primary": true,
    "text-light": true,
    "mt-2": true,
    "cursor-pointer": true,
    "text-center": true,
    "text-[13px]": true,
    "sm:text-[16px]": true,
    "px-6": true,
    "py-3": true,
    "font-bold": true,
  });


  if(href){
    return <div className={buttonClasses}> 
        <Link href={href}>
        {text}
      </Link>
    </div>
  }


  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {text}
    </button>
  );
  
  
};

export default Button;
