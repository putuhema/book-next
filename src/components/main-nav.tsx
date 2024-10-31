import Link from "next/link";
import SearchBar from "./search-bar";
import NavAction from "./main-nav-action";
import { MainNavigationMenu } from "./main-nav-navigation";

export default function MainNav() {
  return (
    <div className="w-full bg-primary fixed inset-0 z-[99] h-max shadow-sm">
      <nav className="p-2 px-6 flex gap-4 justify-between max-w-5xl mx-auto">
        <Link
          href="/"
          className="flex flex-col text-white uppercase items-start font-bold min-w-[200px]"
        >
          <p className="tracking-wide text-lg">Booknext.com</p>
          <p className="capitalize text-sm font-normal">
            Indonesia's Book store
          </p>
        </Link>
        <SearchBar />
        <NavAction />
      </nav>
      <MainNavigationMenu />
    </div>
  );
}
