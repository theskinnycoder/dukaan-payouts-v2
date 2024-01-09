import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { OrderSortableColumn, SortDirection } from "@/lib/types"

interface TransactionsTableFooterProps {
  page: number
  total: number
  sortBy?: OrderSortableColumn
  duration?: number
  sortDirection?: SortDirection
}

export default function TransactionsTableFooter({
  page = 1,
  total,
  sortBy = "createdAt",
  duration = 30,
  sortDirection = "desc",
}: TransactionsTableFooterProps) {
  return total > 0 ? (
    <Pagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href={`/?sortBy=${sortBy}&sortDirection=${sortDirection}&duration=${duration}&page=${
              page - 1
            }`}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {/* Current Page */}
        <PaginationItem>
          <PaginationLink
            isActive={true}
            href={`/?sortBy=${sortBy}&sortDirection=${sortDirection}&duration=${duration}&page=${page}`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href={`/?sortBy=${sortBy}&sortDirection=${sortDirection}&duration=${duration}&page=${
              page + 1
            }`}
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ) : null
}
