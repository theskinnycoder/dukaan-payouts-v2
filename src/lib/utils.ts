import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { clsx, type ClassValue } from "clsx"
import { format, subDays, subMonths, subWeeks } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number | string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(Number(value))
}

export function formatDate(date: string | Date) {
  return format(new Date(date), "dd MMMM, yyyy")
}

export function getLinkHref({
  sortBy = "createdAt",
  sortDirection = "desc",
  duration = 30,
  q = "",
}: {
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
  duration?: DURATION
  q?: string
}) {
  let href = "/"

  let qp = []

  if (sortBy !== "createdAt") {
    qp.push(`sortBy=${sortBy}`)
  }

  if (sortDirection !== "desc") {
    qp.push(`sortDirection=${sortDirection}`)
  }

  if (duration !== 30) {
    qp.push(`duration=${duration}`)
  }

  if (q) {
    qp.push(`q=${q}`)
  }

  return href + (qp.length ? `?${qp.join("&")}` : "")
}

export function generateDate(offset: DURATION) {
  const currentDate = new Date()

  let targetDate
  if (offset === 1) {
    // Yesterday
    targetDate = subDays(currentDate, 1)
  } else if (offset === 7) {
    // Last week
    targetDate = subWeeks(currentDate, 1)
  } else if (offset === 30) {
    // Last month
    targetDate = subMonths(currentDate, 1)
  } else {
    // Default: Today
    targetDate = currentDate
  }

  return targetDate.toISOString()
}

export function generateRandomFiveDigitNumber() {
  return Math.floor(10000 + Math.random() * 90000)
}
