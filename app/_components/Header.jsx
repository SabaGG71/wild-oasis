import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className="relative z-50 px-12 py-5">
      <div className=" max-md:inline-block flex md:justify-between md:z-10 md:relative items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
