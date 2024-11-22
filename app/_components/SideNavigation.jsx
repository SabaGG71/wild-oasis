"use client";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
  },
  {
    name: "Reservations",
    href: "/account/reservations",
  },
  {
    name: "Guest profile",
    href: "/account/profile",
  },
];

function SideNavigation() {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <nav className="border-r max-lg:bg-[#161f28] rounded-lg py-4 px-4 border-primary-900">
      <ul className="flex flex-col gap-2  text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`${
                pathName === link.href ? "bg-primary-900" : ""
              } py-3 px-5 hover:bg-primary-900 rounded-lg hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
