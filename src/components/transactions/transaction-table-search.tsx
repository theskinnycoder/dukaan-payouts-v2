"use client"

import { Input } from "@/components/ui/input"
import { DURATION, OrderSortableColumn, SortDirection } from "@/lib/types"
import { getLinkHref } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { TbSearch as SearchIcon, TbLoader2 } from "react-icons/tb"

interface TransactionTableSearchProps {
  q?: string
}

export default function TransactionTableSearch({
  q,
}: TransactionTableSearchProps) {
  const searchParams = useSearchParams()
  const sortBy = (searchParams.get("sortBy") ??
    "createdAt") as OrderSortableColumn
  const sortDirection = (searchParams.get("sortDirection") ??
    "desc") as SortDirection
  const duration = (searchParams.get("duration") ?? 30) as DURATION
  const [isPending, startTransition] = useTransition()
  const [query, setQuery] = useState(q)

  const { push } = useRouter()

  return (
    <div className="flex items-center relative w-80">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon
          size={20}
          className="stroke-primary/30"
        />
      </div>

      {/* Search Input */}
      <Input
        placeholder="Search by order ID..."
        className="w-72 pl-10"
        variant="outline"
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)

          startTransition(() => {
            push(
              getLinkHref({
                duration,
                sortBy,
                sortDirection,
                q: e.target.value,
              }),
            )
          })
        }}
      />

      {isPending && (
        <div className="absolute right-0 ml-12 top-1/2 transform -translate-y-1/2">
          <TbLoader2 className="animate-spin" />
        </div>
      )}
    </div>
  )
}
