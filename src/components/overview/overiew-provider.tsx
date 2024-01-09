"use client"

import { overviewData } from "./data"
import { OverviewContext } from "./hooks/use-overview"

interface OverviewProviderProps {
  children?: React.ReactNode
}

export default function OverviewProvider({ children }: OverviewProviderProps) {
  return (
    <OverviewContext.Provider
      value={{
        data: overviewData,
      }}
    >
      {children}
    </OverviewContext.Provider>
  )
}
