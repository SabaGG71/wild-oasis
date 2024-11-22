"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function ClientNav({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="text-xl items-center">
      {isOpen ? (
        <ul className="lg:flex max-lg:absolute max-lg:transition-all duration-300 z-[-1] max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:py-16 max-lg:pt-24 max-lg:bg-white gap-12 items-center">
          <li className="max-lg:my-6 max-lg:mx-12  ">
            <Link
              href="/cabins"
              className="hover:text-accent-400 max-lg:text-primary-950 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li className="max-lg:my-6 max-lg:mx-12">
            <Link
              href="/about"
              className="hover:text-accent-400 max-lg:text-primary-950 transition-colors"
            >
              About
            </Link>
          </li>
          {children}
        </ul>
      ) : (
        <ul className="lg:flex max-lg:absolute max-lg:hidden z-[-1] max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:py-16 max-lg:pt-24 max-lg:bg-white gap-12 items-center">
          <li className="max-lg:my-6 max-lg:mx-12">
            <Link
              href="/cabins"
              className="hover:text-accent-400 max-lg:text-primary-950 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li className="max-lg:my-6 max-lg:mx-12">
            <Link
              href="/about"
              className="hover:text-accent-400 max-lg:text-primary-950 transition-colors"
            >
              About
            </Link>
          </li>
          {children}
        </ul>
      )}
      <span
        onClick={() => handleClick()}
        className="text-2xl max-lg:text-white opacity-1 absolute right-6 top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer lg:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 max-lg:text-primary-950" />
        ) : (
          <Menu className="w-6 h-6 cursor-pointer " />
        )}
      </span>
    </nav>
  );
}
