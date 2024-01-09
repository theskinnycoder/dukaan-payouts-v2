import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DURATION, OrderSortableColumn } from "@/lib/types"
import { getLinkHref } from "@/lib/utils"
import Link from "next/link"
import {
  TbDownload as DownloadIcon,
  TbArrowsUpDown as SortIcon,
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
  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <TransactionTableSearch q={q} />

      {/* Actions */}
      <div className="flex items-center space-x-3">
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
          <DropdownMenuContent className="w-56">
            {columns
              .filter((column) => column.sortingEnabled)
              .map((column) => (
                <Link
                  key={column.id}
                  href={getLinkHref({
                    duration,
                    sortBy: column.id,
                    sortDirection: "desc",
                  })}
                >
                  <DropdownMenuCheckboxItem
                    checked={sortBy === column.id}
                    className="cursor-pointer"
                  >
                    {column.label}
                  </DropdownMenuCheckboxItem>
                </Link>
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
