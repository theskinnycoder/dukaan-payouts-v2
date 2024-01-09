import { formatCurrency, formatDate } from "@/lib/utils"
import { Order } from "@prisma/client"
import { TableBody, TableCell, TableRow } from "../ui/table"

interface TransactionsTableBodyProps {
  data: Order[]
  total: number
}

export default function TransactionsTableBody({
  data,
  total,
}: TransactionsTableBodyProps) {
  return (
    <TableBody>
      {total > 0 &&
        data.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="hover:underline underline-offset-4 text-sky-600">
              #{order.id}
            </TableCell>
            <TableCell className="text-center">
              {formatDate(order.createdAt)}
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(order.amount)}
            </TableCell>
            <TableCell className="text-right">
              {formatCurrency(order.transaction_fee)}
            </TableCell>
          </TableRow>
        ))}

      {total === 0 && (
        <TableRow className="h-96">
          <TableCell
            colSpan={4}
            className="text-center"
          >
            No transactions found
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
