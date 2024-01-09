import { Order } from "@prisma/client"

export type OVERVIEW_DATA = {
  label: string
  value: string | number
  formatter: "currency" | "number"
}

export type DURATION = 1 | 2 | 7 | 30

export const durationItems = [
  { id: 1, label: "Today" },
  { id: 2, label: "Yesterday" },
  { id: 7, label: "Last week" },
  { id: 30, label: "Last Month" },
] as {
  id: DURATION
  label: string
}[]

export type OrderSortableColumn = Extract<
  keyof Order,
  "createdAt" | "amount" | "transaction_fee"
>

export type SortDirection = "asc" | "desc"

export type SearchParams = { [key: string]: string | undefined }
