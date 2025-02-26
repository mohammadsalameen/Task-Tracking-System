'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps{
    href : string;
    children : React.ReactNode;
}
const NavLink = (props : IProps) => {
    const path = usePathname();
  return (
    <div>
      <Link href = {props.href} className= {path.startsWith(props.href)? "hover:text-gray-300  hover:border-b-2 hover:border-white " : undefined}>{props.children}</Link>
    </div>
  )
}

export default NavLink;
