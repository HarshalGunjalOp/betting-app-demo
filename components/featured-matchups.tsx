import { Button } from "@/components/ui/button"

export default function FeaturedMatchups() {
  const matchups = [
    {
      id: 1,
      league: "NCAAB",
      date: "28 Mar",
      time: "9:00pm ET",
      team1: {
        name: "UAB",
        abbr: "UAB",
        percentage: "51%",
        spread: "+4.5",
        spreadOdds: "-110",
        bookmaker: "PINNACLE",
      },
      team2: {
        name: "UC Irvine",
        abbr: "UCI",
        percentage: "49%",
        spread: "-4.5",
        spreadOdds: "-105",
        bookmaker: "bet365",
      },
      expertPick: {
        title: "UAB vs. UC Irvine u159.5 (-110)",
        odds: "-110",
        bookmaker: "bet365",
      },
      analysis: {
        title: "UAB vs UC Irvine Prediction, Picks & Odds for Today's NIT Quarterfinal Game",
      },
    },
    {
      id: 2,
      league: "NCAAB",
      date: "27 Mar",
      time: "7:00pm ET",
      team1: {
        name: "BYU",
        abbr: "BYU",
        percentage: "44%",
        spread: "+5.5",
        spreadOdds: "-110",
        bookmaker: "bet365",
      },
      team2: {
        name: "Alabama",
        abbr: "ALA",
        percentage: "56%",
        spread: "-5.5",
        spreadOdds: "-116",
        bookmaker: "PINNACLE",
      },
      expertPick: {
        title: "Alabama TT o89.5 (-115)",
        odds: "-115",
        bookmaker: "bet365",
      },
      analysis: null,
    },
    {
      id: 3,
      league: "NCAAB",
      date: "28 Mar",
      time: "7:00pm ET",
      team1: {
        name: "Mississippi",
        abbr: "MISS",
        percentage: "35%",
        spread: "+3.5",
        spreadOdds: "-109",
        bookmaker: "PINNACLE",
      },
      team2: {
        name: "Michigan State",
        abbr: "MSU",
        percentage: "65%",
        spread: "-3.5",
        spreadOdds: "-107",
        bookmaker: "PINNACLE",
      },
      expertPick: {
        title: "Michigan St. -3.0 (-110)",
        odds: "-110",
        bookmaker: "bet365",
      },
      analysis: null,
    },
    {
      id: 4,
      league: "NCAAB",
      date: "28 Mar",
      time: "9:30pm ET",
      team1: {
        name: "Michigan",
        abbr: "MICH",
        percentage: "63%",
        spread: "+8",
        spreadOdds: "-110",
        bookmaker: "William Hill",
      },
      team2: {
        name: "Auburn",
        abbr: "AUB",
        percentage: "37%",
        spread: "-8.5",
        spreadOdds: "-115",
        bookmaker: "bet365",
      },
      expertPick: {
        title: "Michigan vs. Auburn u153.5 (-114)",
        odds: "-114",
        bookmaker: "bet365",
      },
      analysis: null,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {matchups.map((matchup) => (
        <MatchupCard key={matchup.id} matchup={matchup} />
      ))}
    </div>
  )
}

function MatchupCard({ matchup }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-gray-100 p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded text-white">{matchup.league}</span>
          <span className="text-xs text-gray-600">
            {matchup.date} • {matchup.time}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs">{matchup.team1.abbr.charAt(0)}</span>
            </div>
            <span className="font-bold">{matchup.team1.abbr}</span>
          </div>
          <span className="text-sm">{matchup.team1.percentage}</span>
          <div className="flex items-center space-x-1">
            <span className="bg-gray-200 text-xs px-2 py-1 rounded">
              {matchup.team1.spread} {matchup.team1.spreadOdds}
            </span>
            <img
              src="/placeholder.svg?height=20&width=60"
              alt={matchup.team1.bookmaker}
              className="h-4"
              width={60}
              height={20}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <span className="text-xs">{matchup.team2.abbr.charAt(0)}</span>
            </div>
            <span className="font-bold">{matchup.team2.abbr}</span>
          </div>
          <span className="text-sm">{matchup.team2.percentage}</span>
          <div className="flex items-center space-x-1">
            <span className="bg-gray-200 text-xs px-2 py-1 rounded">
              {matchup.team2.spread} {matchup.team2.spreadOdds}
            </span>
            <img
              src="/placeholder.svg?height=20&width=60"
              alt={matchup.team2.bookmaker}
              className="h-4"
              width={60}
              height={20}
            />
          </div>
        </div>

        <div className="bg-gray-100 p-2 rounded mb-3">
          <div className="text-xs text-gray-500 mb-1">EXPERT PICK</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs">{matchup.team1.abbr.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium">{matchup.expertPick.title}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="bg-gray-200 text-xs px-2 py-1 rounded">{matchup.expertPick.odds}</span>
              <img
                src="/placeholder.svg?height=20&width=60"
                alt={matchup.expertPick.bookmaker}
                className="h-4"
                width={60}
                height={20}
              />
            </div>
          </div>
        </div>

        <Button variant="outline" className="w-full text-sm">
          View Matchup
        </Button>
      </div>
    </div>
  )
}

