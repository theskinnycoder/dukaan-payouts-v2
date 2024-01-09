import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DURATION,
  OrderSortableColumn,
  SortDirection,
  durationItems,
} from "@/lib/types"
import { getLinkHref } from "@/lib/utils"
import Link from "next/link"

interface OverviewDropdownProps {
  children?: React.ReactNode
  duration?: DURATION
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
}

export default function OverviewDropdown({
  children,
  duration = 30,
  sortBy = "createdAt",
  sortDirection = "desc",
}: OverviewDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {durationItems.map((item) => (
          <Link
            key={item.id}
            href={getLinkHref({
              duration: item.id,
              sortBy,
              sortDirection,
            })}
          >
            <DropdownMenuCheckboxItem
              checked={duration === item.id}
              className="cursor-pointer"
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
