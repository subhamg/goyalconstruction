import Link from "next/link";
import { MenuIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <nav className="py-6 md:py-4  px-6 md:px-2  mt-0 fixed w-full z-10 top-0 bg-transparent">
      <div className="md:px-20 mx-auto md:flex flex-row md:items-center justify-between bg-transparent ">
        <div className="hidden md:flex">
          <Link href="/">
            <a className="text-grey-900 opacity-46 text-lg font-semibold">
              Goyal Construction
            </a>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between gap-12">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About us</a>
          </Link>
          <Link href="/">
            <a>Services</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <button className="md:hidden h-8 w-8" id="navbar-toggle">
            <MenuIcon className="text-grey-900" />
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row  mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <button className="px-6 py-3 md:mx-2 text-gc-black text-center bg-gc-primary  rounded-full hover:text-grey-900 tracking-wide">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
