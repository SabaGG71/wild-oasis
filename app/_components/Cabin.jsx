"use client";
import Image from "next/image";
import TextExpander from "./TextExpender";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid relative grid-cols-1 lg:grid-cols-[3fr_4fr] gap-20 border rounded-lg border-primary-800 lg:py-3 lg:px-10 mb-24">
      <div className="relative lg:scale-[1.15] lg:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover rounded-lg max-lg:min-h-[300px]"
          alt={`Cabin ${name}`}
        />
      </div>

      <div className="max-lg:mt-64 max-lg:px-9">
        <h3 className="text-accent-100 font-black text-6xl max-sm:text-4xl  rounded-lg lg:text-7xl mb-5 lg:translate-x-[-254px] bg-primary-950 p-6 pb-1 lg:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Located in the heart of the
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
