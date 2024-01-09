"use client"

import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationLink,
} from "@/components/ui/pagination"
import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { cn, getLinkHref } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import {
  TbChevronLeft as ChevronLeftIcon,
  TbChevronRight as ChevronRightIcon,
  TbLoader2 as SpinnerIcon,
} from "react-icons/tb"

interface TransactionsTableFooterProps {
  page: number
  total: number
  sortBy?: OrderSortableColumn
  duration?: DURATION
  sortDirection?: SortDirection
}

export default function TransactionsTableFooter({
  page = 1,
  total,
  sortBy = "createdAt",
  duration = 30,
  sortDirection = "desc",
}: TransactionsTableFooterProps) {
  const [isPending, startTransition] = useTransition()
  const { push } = useRouter()

  return total > 0 ? (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => {
            startTransition(() => {
              push(
                getLinkHref({
                  page: page - 1,
                  sortBy,
                  sortDirection,
                  duration,
                }),
              )
            })
          }}
          className={cn(
            "flex items-center space-x-2",
            page === 1 && "opacity-50 pointer-events-none",
          )}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          <span className="font-normal">Previous</span>
        </Button>

        {/* Current Page */}
        <PaginationLink
          isActive={true}
          href={`/?sortBy=${sortBy}&sortDirection=${sortDirection}&duration=${duration}&page=${page}`}
        >
          {isPending ? <SpinnerIcon className="animate-spin" /> : page}
        </PaginationLink>

        {/* Next */}
        <Button
          variant="outline"
          disabled={page * 8 >= total}
          onClick={() => {
            startTransition(() => {
              push(
                getLinkHref({
                  page: page + 1,
                  sortBy,
                  sortDirection,
                  duration,
                }),
              )
            })
          }}
          className={cn(
            "flex items-center space-x-2",
            page * 8 >= total && "opacity-50 pointer-events-none",
          )}
        >
          <span className="font-normal">Next</span>
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </PaginationContent>
    </Pagination>
  ) : null
}
