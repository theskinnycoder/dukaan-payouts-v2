"use client"

import { TbWallet as WalletIcon } from "react-icons/tb"
import useSidebar from "./hooks/use-sidebar"

export default function SidebarFooter() {
  const { data } = useSidebar()

  const { available_credits } = data

  return (
    <div className="flex items-center space-x-4 bg-muted/10 rounded-md p-3">
      {/* Icon */}
      <div className="p-2 bg-muted/10 rounded-md">
        <WalletIcon className="w-8 h-8" />
      </div>

      <div className="flex flex-col space-y-1 flex-1">
        {/* Label */}
        <span className="text-muted-foreground">Available Credits</span>

        {/* Credits */}
        <span className="text-white font-medium">{available_credits}</span>
      </div>
    </div>
  )
}
SidebarFooter.displayName = "Sidebar.Footer"
