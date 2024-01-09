import { Card } from "@/components/ui/card"
import { Table } from "@/components/ui/table"
import db from "@/lib/db"
import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { generateDate } from "@/lib/utils"
import TransactionsTableBody from "./transactions-table-body"
import TransactionsTableFooter from "./transactions-table-footer"
import TransactionsTableHead from "./transactions-table-head"
import TransactionsTableHeader from "./transactions-table-header"

const PAGE_SIZE = 8

type GetDataParams = {
  page?: number
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
  q?: string
  duration?: DURATION
}

async function getData({
  page = 1,
  sortBy = "createdAt",
  sortDirection = "desc",
  q = "",
  duration = 30,
}: GetDataParams) {
  const date = generateDate(duration)

  if (page < 1) page = 1

  const orders = await db.order.findMany({
    where: {
      id: {
        contains: q,
      },
      createdAt: {
        gte: date,
      },
    },
    take: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
    orderBy: {
      [sortBy]: sortDirection,
    },
  })

  const total = await db.order
    .findMany({
      where: {
        id: {
          contains: q,
        },
        createdAt: {
          gte: date,
        },
      },
    })
    .then((data) => data.length)

  return { data: orders, total }
}

interface TransactionsTableProps extends GetDataParams {}

export default async function TransactionsTable({
  duration = 30,
  page = 1,
  sortBy = "createdAt",
  sortDirection = "desc",
  q = "",
}: TransactionsTableProps) {
  const { data, total } = await getData({
    page,
    sortBy,
    sortDirection,
    q,
    duration,
  })

  return (
    <Card className="p-4 flex flex-col space-y-4">
      {/* Header */}
      <TransactionsTableHeader
        duration={duration}
        sortBy={sortBy}
        q={q}
      />

      {/* Body */}
      <Table>
        <TransactionsTableHead
          duration={duration}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
        <TransactionsTableBody
          data={data}
          total={total}
        />
      </Table>

      {/* Footer */}
      <TransactionsTableFooter
        page={page}
        total={total}
        duration={duration}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />
    </Card>
  )
}
