import Link from "next/link"
import FeaturedMatchups from "@/components/featured-matchups"
import TopSportsbooks from "@/components/top-sportsbooks"
import MarchMadnessBanner from "@/components/march-madness-banner"
import SportsTabs from "@/components/sports-tabs"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Upcoming Matchups</h1>

        <SportsTabs />

        <div className="flex flex-col space-y-2 mb-6">
          <div className="flex space-x-4 text-sm">
            <Link href="/ncaab/scoreboards" className="text-gray-700 hover:text-primary">
              NCAAB Scoreboards
            </Link>
            <Link href="/ncaab/odds" className="text-gray-700 hover:text-primary">
              NCAAB Odds
            </Link>
            <Link href="/ncaab/consensus" className="text-gray-700 hover:text-primary">
              NCAAB Consensus
            </Link>
          </div>
        </div>

        <FeaturedMatchups />

        <MarchMadnessBanner />

        <TopSportsbooks />
      </div>
    </main>
  )
}

