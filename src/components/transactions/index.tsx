import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { Suspense } from "react"
import TransactionsTable from "./transactions-table"

function getDurationText(duration: DURATION) {
  switch (duration) {
    case 1:
      return "Today"
    case 2:
      return "Yesterday"
    case 7:
      return "This Week"
    case 30:
    default:
      return "This Month"
  }
}

interface TransactionsProps {
  duration?: DURATION
  page?: number
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
  q?: string
}

export default function Transactions({
  duration = 30,
  page = 1,
  sortBy = "createdAt",
  sortDirection = "desc",
  q = "",
}: TransactionsProps) {
  return (
    <div className="flex flex-col space-y-8 px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* Title */}
        <h4 className="font-medium text-xl">
          Transactions | {getDurationText(+duration as DURATION)}
        </h4>
      </div>

      {/* Table */}
      <Suspense fallback={<>Loading...</>}>
        <TransactionsTable
          page={page}
          sortBy={sortBy}
          sortDirection={sortDirection}
          duration={duration}
          q={q}
        />
      </Suspense>
    </div>
  )
}
