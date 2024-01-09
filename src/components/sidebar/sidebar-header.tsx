"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
        className="rounded-md"
        width={54}
        height={54}
      />

      <div className="flex flex-col space-y-1 flex-1">
        {/* Name */}
        <span className="text-lg">{name}</span>

        {/* Visit Store Link */}
        <Link
          href="#"
          className="underline text-muted-foreground font-light underline-offset-4"
        >
          Visit Store
        </Link>
      </div>

      {/* Toggle Button */}
      <Button size="icon">
        <ChevronDown size={30} />
      </Button>
    </div>
  )
}
SidebarHeader.displayName = "Sidebar.Header"
