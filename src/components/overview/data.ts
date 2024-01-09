export type OVERVIEW_DATA = {
  label: string
  value: string | number
  formatter: "currency" | "number"
}[]

export const overviewData = [
  {
    label: "Online orders",
    value: 231,
    formatter: "number",
  },
  {
    label: "Amount received",
    value: 23_92_312.19,
    formatter: "currency",
  },
] satisfies OVERVIEW_DATA
