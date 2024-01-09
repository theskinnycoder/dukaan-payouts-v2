import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface OverviewDropdownProps {
  children?: React.ReactNode
}

export default function OverviewDropdown({ children }: OverviewDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Today</DropdownMenuItem>
        <DropdownMenuItem>Yesterday</DropdownMenuItem>
        <DropdownMenuItem>Last week</DropdownMenuItem>
        <DropdownMenuItem>Last Month</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
