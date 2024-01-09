export type OVERVIEW_DATA = {
  label: string
  value: string | number
  formatter: "currency" | "number"
}

export type DURATION = 1 | 2 | 7 | 30

export type SearchParams = { [key: string]: string | string[] | undefined }
