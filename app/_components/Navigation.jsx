import Link from "next/link";
import { auth } from "../_lib/auth";
import ClientNav from "./ClientNav";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  const x = 20;
  console.log(!!x);

  return (
    <>
      <ClientNav>
        <li className="md:my-0">
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 max-lg:text-primary-950 max-lg:mx-12 flex items-center gap-4 max-md:text-primary-950 transition-colors"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span>Guest Area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 max-lg:mx-12 max-lg:text-primary-950 transition-colors"
            >
              Guest Area
            </Link>
          )}
        </li>
      </ClientNav>
    </>
  );
}
