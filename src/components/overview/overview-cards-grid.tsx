import db from "@/lib/db"
import { DURATION } from "@/lib/types"
import { generateDate } from "@/lib/utils"
import OverviewCard from "./overview-card"

async function getData(duration: DURATION) {
  const date = generateDate(duration)

  const data = await db.order.aggregate({
    _sum: {
      amount: true,
      transaction_fee: true,
    },
    where: {
      createdAt: {
        gte: date,
      },
    },
  })

  const total = await db.order.count({
    where: {
      createdAt: {
        gte: date,
      },
    },
  })

  const totalAmount =
    typeof data._sum.amount === "number" ? data._sum.amount : 0

  return {
    data: [
      {
        label: "Online orders",
        value: total,
        formatter: "number" as const,
      },
      {
        label: "Amount received",
        value: totalAmount,
        formatter: "currency" as const,
      },
    ],
  }
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
          value={`${card.value}`}
          formatter={card.formatter}
        />
      ))}
    </div>
  )
}
