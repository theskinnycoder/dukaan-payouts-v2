import { OrderSortableColumn } from "@/lib/types"

type Column = {
  id: OrderSortableColumn
  label: string
  align: "left" | "center" | "right"
  sortingEnabled: boolean
}

const columns = [
  { id: "id", label: "Order ID", align: "left", sortingEnabled: false },
  {
    id: "createdAt",
    label: "Order date",
    align: "center",
    sortingEnabled: true,
  },
  { id: "amount", label: "Order amount", align: "right", sortingEnabled: true },
  {
    id: "transaction_fee",
    label: "Transaction fees",
    align: "right",
    sortingEnabled: true,
  },
] as Column[]

export default columns
