import NFLSubnav from "@/components/nfl-subnav"
import NFLMustReads from "@/components/nfl-must-reads"
import NFLBettingTools from "@/components/nfl-betting-tools"
import TopNFLSportsbooks from "@/components/top-nfl-sportsbooks"
import PopularContent from "@/components/popular-content"

export default function NFLPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <NFLSubnav />

      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">NFL Betting: Make Smarter Football Bets</h1>
          <p className="text-gray-700 mb-6">
            Get informed NFL analysis, smart football picks, the best NFL odds, stats, and more. Covers' NFL is your
            one-stop shop for making smarter football bets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <NFLMustReads />
            <NFLBettingTools />
          </div>

          <div className="space-y-8">
            <TopNFLSportsbooks />
            <PopularContent />
          </div>
        </div>
      </div>
    </main>
  )
}

