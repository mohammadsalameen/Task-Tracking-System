import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import NavLink from "./NavLink";

function Header() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg ">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={logo.src} alt="Logo" width={51} height={51} />
              <h1 className="text-2xl font-bold ml-2">Task Tracker</h1>
            </div>
          </Link>
          <div className="hidden md:flex space-x-9">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/tasks">All Tasks</NavLink>
            <NavLink href="/add-task">Add Task</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
