"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { cn, getLinkHref } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import {
  TbSortAscending as AscendingIcon,
  TbChevronDown as ChevronDownIcon,
  TbSortDescending as DescendingIcon,
  TbLoader2 as SpinnerIcon,
} from "react-icons/tb"
import columns from "./columns"

interface TransactionsTableHeadProps {
  sortBy?: OrderSortableColumn
  duration?: DURATION
  sortDirection?: SortDirection
}

export default function TransactionTableHead({
  duration = 30,
  sortDirection = "desc",
  sortBy = "createdAt",
}: TransactionsTableHeadProps) {
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()

  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => (
          <TableHead
            key={column.id}
            className={cn(
              column.align === "right" && "text-right",
              column.align === "center" && "text-center",
            )}
          >
            {!column.sortingEnabled ? (
              <span className="bg-transparent font-normal px-2 py-1">
                {column.label}
              </span>
            ) : (
              <>
                {sortBy === column.id ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="bg-transparent font-normal px-2 py-1"
                      >
                        <span className="mr-2">{column.label}</span>
                        {isPending ? (
                          <SpinnerIcon className={cn("animate-spin")} />
                        ) : (
                          <ChevronDownIcon size={16} />
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {/* Ascending */}
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={sortDirection === "asc"}
                        onClick={() => {
                          startTransition(() => {
                            push(
                              getLinkHref({
                                duration,
                                sortBy: column.id,
                                sortDirection: "asc",
                              }),
                            )
                          })
                        }}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <AscendingIcon size={16} />
                        <span>ASC</span>
                      </DropdownMenuCheckboxItem>

                      {/* Descending */}
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={sortDirection === "desc"}
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
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <DescendingIcon size={16} />
                        <span>DESC</span>
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  column.label
                )}
              </>
            )}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}
