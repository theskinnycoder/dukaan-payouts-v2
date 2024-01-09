import { Button } from "@/components/ui/button"
import { TbChevronDown } from "react-icons/tb"
import OverviewDropdown from "./overview-dropdown"

interface OverviewHeaderProps {
  withDropdown?: boolean
}

export default function OverviewHeader({ withDropdown }: OverviewHeaderProps) {
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
              <span>Last Month</span>
              <TbChevronDown size={18} />
            </Button>
          </OverviewDropdown>
        </>
      )}
    </div>
  )
}
