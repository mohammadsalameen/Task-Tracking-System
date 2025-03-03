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
      <Link href = {props.href} className= {path === props.href ? "border-b-4 border-[#60A5FA] " : undefined}>{props.children}</Link>
    </div>
  )
}

export default NavLink;
