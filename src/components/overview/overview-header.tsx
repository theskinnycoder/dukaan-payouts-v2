import { Button } from "@/components/ui/button"
import { DURATION } from "@/lib/types"
import { TbChevronDown } from "react-icons/tb"
import OverviewDropdown from "./overview-dropdown"

interface OverviewHeaderProps {
  duration?: DURATION
  withDropdown?: boolean
}

export const items = [
  { id: 1, label: "Today" },
  { id: 2, label: "Yesterday" },
  { id: 7, label: "Last week" },
  { id: 30, label: "Last Month" },
] as const

export default function OverviewHeader({
  duration,
  withDropdown,
}: OverviewHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <h4 className="font-medium text-xl">Overview</h4>

      {withDropdown && (
        <>
          {/* Dropdown Menu */}
          <OverviewDropdown>
            <Button
              variant="outline"
              className="bg-white flex items-center space-x-3.5 text-base text-neutral-700 font-normal"
            >
              <span>{items.find((item) => item.id === +duration!)?.label}</span>
              <TbChevronDown size={18} />
            </Button>
          </OverviewDropdown>
        </>
      )}
    </div>
  )
}
