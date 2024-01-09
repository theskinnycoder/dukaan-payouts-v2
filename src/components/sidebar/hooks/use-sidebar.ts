"use client"

import { createContext, useContext } from "react"
import { SIDEBAR_DATA } from "../data"

type SidebarContextType = {
  data: SIDEBAR_DATA
} | null

export const SidebarContext = createContext<SidebarContextType>(null)

export default function useSidebar() {
  const context = useContext(SidebarContext)

  if (context === null) {
    throw new Error(
      "useSidebar must be used within a SidebarProvider. Wrap a parent component in <SidebarProvider> to fix this error.",
    )
  }

  return context
}
