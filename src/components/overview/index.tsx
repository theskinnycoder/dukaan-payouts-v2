import OverviewProvider from "./overiew-provider"
import OverviewCard from "./overview-card"
import OverviewCardsGrid from "./overview-cards-grid"
import OverviewHeader from "./overview-header"

interface OverviewProps {
  children?: React.ReactNode
}

export default function Overview({ children }: OverviewProps) {
  return (
    <OverviewProvider>
      <div className="flex flex-col space-y-8 px-8 py-6">{children}</div>
    </OverviewProvider>
  )
}

Overview.Header = OverviewHeader
Overview.Card = OverviewCard
Overview.CardsGrid = OverviewCardsGrid
