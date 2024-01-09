import { Button } from "@/components/ui/button"
import {
  DURATION,
  OrderSortableColumn,
  SortDirection,
  durationItems,
} from "@/lib/types"
import { TbChevronDown } from "react-icons/tb"
import OverviewDropdown from "./overview-dropdown"

interface OverviewHeaderProps {
  duration?: DURATION
  sortBy?: OrderSortableColumn
  sortDirection?: SortDirection
  withDropdown?: boolean
}

export default function OverviewHeader({
  duration = 30,
  sortBy = "createdAt",
  sortDirection = "desc",
  withDropdown = true,
}: OverviewHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <h4 className="font-medium text-xl">Overview</h4>

      {withDropdown && (
        <>
          {/* Dropdown Menu */}
          <OverviewDropdown
            duration={duration}
            sortBy={sortBy}
            sortDirection={sortDirection}
          >
            <Button
              variant="outline"
              className="bg-white flex items-center space-x-3.5 text-base text-neutral-700 font-normal"
            >
              <span>
                {durationItems.find((item) => item.id === +duration!)?.label ??
                  "Last Month"}
              </span>
              <TbChevronDown size={18} />
            </Button>
          </OverviewDropdown>
        </>
      )}
    </div>
  )
}
