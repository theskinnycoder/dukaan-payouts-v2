"use client"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DURATION } from "@/lib/types"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { items } from "./overview-header"

interface OverviewDropdownProps {
  children?: React.ReactNode
}

export default function OverviewDropdown({ children }: OverviewDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const duration = Number(searchParams.get("duration") ?? 30) as DURATION

  const createQueryString = useCallback(
    (name: string, value: unknown) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, `${value}`)

      return params.toString()
    },
    [searchParams],
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.id}
            checked={duration === item.id}
            onCheckedChange={() => {
              if (item.id === 30) {
                router.push(pathname)
                return
              }

              router.push(
                pathname + "?" + createQueryString("duration", item.id),
              )
            }}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
