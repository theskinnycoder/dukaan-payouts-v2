"use client"

import { sidebarData } from "./data"
import { SidebarContext } from "./hooks/use-sidebar"

interface SidebarProviderProps {
  children?: React.ReactNode
}

export default function SidebarProvider({ children }: SidebarProviderProps) {
  return (
    <SidebarContext.Provider
      value={{
        data: sidebarData,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
