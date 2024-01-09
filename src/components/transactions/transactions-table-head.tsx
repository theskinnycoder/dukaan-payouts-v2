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
import Link from "next/link"
import {
  TbSortAscending as AscendingIcon,
  TbChevronDown as ChevronDownIcon,
  TbSortDescending as DescendingIcon,
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
                        <ChevronDownIcon size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {/* Ascending */}
                      <Link
                        key={column.id}
                        href={getLinkHref({
                          duration,
                          sortBy: column.id,
                          sortDirection: "asc",
                        })}
                      >
                        <DropdownMenuCheckboxItem
                          checked={sortDirection === "asc"}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <AscendingIcon size={16} />
                          <span>ASC</span>
                        </DropdownMenuCheckboxItem>
                      </Link>

                      {/* Descending */}
                      <Link
                        key={column.id}
                        href={getLinkHref({
                          duration,
                          sortBy: column.id,
                          sortDirection: "desc",
                        })}
                      >
                        <DropdownMenuCheckboxItem
                          checked={sortDirection === "desc"}
                          className="flex items-center space-x-2 cursor-pointer"
                        >
                          <DescendingIcon size={16} />
                          <span>DESC</span>
                        </DropdownMenuCheckboxItem>
                      </Link>
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
