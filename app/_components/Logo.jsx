"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <div>
      <Link className="flex items-center z-50 gap-4" href="/">
        <Image src={logo} quality={100} width={60} height={60} alt="" />
        <span
          className={`font-semibold max-lg:text-primary-400 lg:text-primary-100 text-xl`}
        >
          Wild Oasis
        </span>
      </Link>
    </div>
  );
}
