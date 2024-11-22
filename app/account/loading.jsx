import React from "react";
import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 items-center text-center justify-center">
      <Spinner />
      <p className="text-2xl text-primary-200">Loading Account Data...</p>
    </div>
  );
}
