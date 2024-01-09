"use client"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DURATION,
  OrderSortableColumn,
  SortDirection,
  durationItems,
} from "@/lib/types"
import { cn, getLinkHref } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { TbLoader2 as SpinnerIcon } from "react-icons/tb"

interface OverviewDropdownProps {
  children?: React.ReactNode
  duration?: DURATION
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
}

export default function OverviewDropdown({
  children,
  duration = 30,
  sortBy = "createdAt",
  sortDirection = "desc",
}: OverviewDropdownProps) {
  const { push } = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex items-center space-x-2 relative">
      {/* Spinner */}
      <SpinnerIcon
        className={cn("animate-spin", isPending ? "opacity-100" : "opacity-0")}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
          {durationItems.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.id}
              checked={duration === item.id}
              onClick={() => {
                startTransition(() => {
                  push(
                    getLinkHref({
                      duration: item.id,
                      sortBy,
                      sortDirection,
                    }),
                  )
                })
              }}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
