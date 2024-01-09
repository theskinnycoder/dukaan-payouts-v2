import { Card } from "@/components//ui/card"
import { formatCurrency } from "@/lib/utils"
import { OVERVIEW_DATA } from "./data"

type OverviewCardProps = OVERVIEW_DATA[number]

export default function OverviewCard({
  label,
  value,
  formatter,
}: OverviewCardProps) {
  return (
    <Card className="flex flex-col items-start justify-around min-h-36 px-5">
      <span className="text-neutral-700 text-lg font-light">{label}</span>
      <span className="text-3xl font-medium text-neutral-900">
        {formatter === "number" ? value : formatCurrency(value)}
      </span>
    </Card>
  )
}
