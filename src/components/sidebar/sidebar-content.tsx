"use client"

import Link from "next/link"
import useSidebar from "./hooks/use-sidebar"

export default function SidebarContent() {
  const { data } = useSidebar()

  const { links } = data

  return (
    <div className="flex flex-col space-y-2.5 text-muted-foreground text-lg">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
        >
          <div className="flex items-center gap-3.5 font-normal hover:bg-muted/10 px-3 py-1.5 rounded-md group transition-all duration-75 ease-in-out -mx-2">
            <link.icon className="w-5 h-5 group-hover:text-white" />
            <span className="group-hover:text-white">{link.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
SidebarContent.displayName = "Sidebar.Content"
