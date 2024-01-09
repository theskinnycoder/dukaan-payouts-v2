"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { LuChevronDown as ChevronDownIcon } from "react-icons/lu"
import useSidebar from "./hooks/use-sidebar"

export default function SidebarHeader() {
  const { data } = useSidebar()

  const {
    user: { name, image },
  } = data

  return (
    <div className="flex items-center space-x-4">
      {/* Image */}
      <Image
        src={image}
        alt={name}
        className="rounded-lg"
        width={50}
        height={50}
      />

      <div className="flex flex-col space-y-0.5 flex-1">
        {/* Name */}
        <span>{name}</span>

        {/* Visit Store Link */}
        <Link
          href="#"
          className="underline text-muted-foreground font-light underline-offset-4 text-sm"
        >
          Visit store
        </Link>
      </div>

      {/* Toggle Button */}
      <Button size="icon">
        <ChevronDownIcon size={26} />
      </Button>
    </div>
  )
}
SidebarHeader.displayName = "Sidebar.Header"
