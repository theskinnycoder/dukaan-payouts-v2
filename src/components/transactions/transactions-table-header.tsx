"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DURATION, OrderSortableColumn } from "@/lib/types"
import { cn, getLinkHref } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import {
  TbDownload as DownloadIcon,
  TbArrowsUpDown as SortIcon,
  TbLoader2 as SpinnerIcon,
} from "react-icons/tb"
import columns from "./columns"
import TransactionTableSearch from "./transaction-table-search"

interface TransactionsTableHeaderProps {
  sortBy?: OrderSortableColumn
  duration?: DURATION
  q?: string
}

export default function TransactionsTableHeader({
  sortBy = "createdAt",
  duration = 30,
  q = "",
}: TransactionsTableHeaderProps) {
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()

  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <TransactionTableSearch q={q} />

      {/* Actions */}
      <div className="flex items-center space-x-3">
        {/* Spinner */}
        <SpinnerIcon
          className={cn(
            "animate-spin",
            isPending ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex space-x-1.5 items-center"
            >
              <span className="text-neutral-700 font-normal text-base">
                Sort
              </span>
              <SortIcon
                size={14}
                className="text-neutral-700"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {columns
              .filter((column) => column.sortingEnabled)
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={sortBy === column.id}
                  onClick={() => {
                    startTransition(() => {
                      push(
                        getLinkHref({
                          duration,
                          sortBy: column.id,
                          sortDirection: "desc",
                        }),
                      )
                    })
                  }}
                  className="cursor-pointer"
                >
                  {column.label}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort */}
        <Button
          size="icon"
          variant="outline"
        >
          <DownloadIcon
            size={20}
            className="text-neutral-700"
          />
        </Button>
      </div>
    </div>
  )
}
