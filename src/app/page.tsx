import Header from "@/components/header"
import Overview from "@/components/overview"
import Sidebar from "@/components/sidebar"
import { DURATION, SearchParams } from "@/lib/types"
import { Suspense } from "react"

interface HomePageProps {
  searchParams: SearchParams
}

export default function HomePage({ searchParams }: HomePageProps) {
  const duration = (searchParams.duration ?? 30) as DURATION

  return (
    <main className="min-h-screen flex-col items-stretch justify-stretch grid grid-cols-12 w-full gap-0">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar>
          <Sidebar.Header />
          <div className="flex-1">
            <Sidebar.Content />
          </div>
          <Sidebar.Footer />
        </Sidebar>
      </div>

      {/* Content */}
      <section className="flex flex-col col-span-10 max-h-screen overflow-y-scroll">
        {/* Header */}
        <Header>
          <Header.Title />
          <Header.Searchbar />
          <Header.Actions />
        </Header>

        {/* Overview Cards */}
        <Overview>
          {/* Header */}
          <Overview.Header
            withDropdown
            duration={duration}
          />

          {/* Cards */}
          <Suspense fallback={<>Loading...</>}>
            <Overview.CardsGrid duration={duration} />
          </Suspense>
        </Overview>
      </section>
    </main>
  )
}
