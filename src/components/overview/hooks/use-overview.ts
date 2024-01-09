"use client"

import { createContext, useContext } from "react"
import { OVERVIEW_DATA } from "../data"

type OverviewContextType = {
  data: OVERVIEW_DATA
} | null

export const OverviewContext = createContext<OverviewContextType>(null)

export default function useOverview() {
  const context = useContext(OverviewContext)

  if (context === null) {
    throw new Error(
      "useOverview must be used within a SidebarProvider. Wrap a parent component in <OverviewProvider> to fix this error.",
    )
  }

  return context
}
