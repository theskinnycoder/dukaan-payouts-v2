"use client"

import useOverview from "./hooks/use-overview"
import OverviewCard from "./overview-card"

export default function OverviewCardsGrid() {
  const { data } = useOverview()

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
