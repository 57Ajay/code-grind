'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header=()=> {
  const links = [
    { name: "Home", href: "/" },
    { name: "Post", href: "/post" },
    { name: "All posts", href: "/all-posts" },
    { name: "About", href: "/about" },
]
    const path = usePathname();

  return (
    <header className="flex max-w-[1280px] mx-auto px-4 shadow-lg bg-slate-800 text-zinc-200 rounded-sm justify-between p-4">
      <div>
        <Link href='/'>NeXt Write</Link></div>
      <div className="flex gap-4">
        {links.map((link) => (
          <Link className={`${path === link.href ? "text-slate-500 font-bold" : "text-zinc-200"}`} key={link.name} href={link.href}>
            {link.name}
          </Link>
        ))}
        
      </div>
    </header>
  )
}


export default Header;