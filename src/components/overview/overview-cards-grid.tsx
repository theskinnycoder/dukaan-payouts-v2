import { overviewData } from "@/lib/data"
import { DURATION } from "@/lib/types"
import OverviewCard from "./overview-card"

async function getData(duration: DURATION) {
  const data = overviewData.map(({ value, ...rest }) => ({
    ...rest,
    value: typeof value === "number" ? value * duration : value,
  }))

  return { data }
}

interface OverviewCardsGridProps {
  duration: DURATION
}

export default async function OverviewCardsGrid({
  duration,
}: OverviewCardsGridProps) {
  const { data } = await getData(duration)

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((card) => (
        <OverviewCard
          key={card.label}
          label={card.label}
          value={card.value}
          formatter={card.formatter}
        />
      ))}
    </div>
  )
}
