import SportSubnav from "@/components/sport-subnav"
import SportMustReads from "@/components/sport-must-reads"
import SportBettingTools from "@/components/sport-betting-tools"
import TopSportSportsbooks from "@/components/top-sport-sportsbooks"
import PopularContent from "@/components/popular-content"

export default async function SportPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const sport = String(slug[0]).toUpperCase() + String(slug).slice(1)
  return (
    <main className="min-h-screen bg-gray-100">
      <SportSubnav />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{sport} Betting: Make Smarter Bets</h1>
          <p className="text-gray-700 mb-6">
            Get informed {sport} analysis, smart picks, the best {sport} odds, stats, and more. Covers' {sport} is your
            one-stop shop for making smarter bets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <SportMustReads />
            <SportBettingTools />
          </div>

          <div className="space-y-8">
            <TopSportSportsbooks />
            <PopularContent />
          </div>
        </div>
      </div>
    </main>
  )
}

