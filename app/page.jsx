import Link from "next/link";
import bg from "@/public/bg.png";
import Image from "next/image";
export default function Page() {
  return (
    <main className="mt-24">
      <Image
        fill
        quality={100}
        src={bg}
        placeholder="blur"
        className="z-[-1] object-cover brightness-90"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-6xl  max-sm:text-[55px] md:text-7xl lg:text-8xl text-primary-50 mb-16 tracking-tight font-bold">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 rounded-lg max-sm:py-4 max-sm:px-5 px-6 py-4 lg:px-8 lg:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
