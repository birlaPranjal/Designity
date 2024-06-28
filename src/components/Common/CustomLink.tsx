import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  underline?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({ href, children, underline }) => {
  return (
    <Link href={href} className={` hover:text-primary  flex gap-2 items-center hover:drop-shadow-lg decoration-solid  hover:decoration-primary  transition-all duration-200 ease-in-out ${underline ? 'underline' : ''}`}>
        {children}
    </Link>
  );
};

export default CustomLink;