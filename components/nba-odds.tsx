import Link from "next/link"

export default function NBAOdds() {
  const games = [
    {
      id: 1,
      time: "19:00",
      team1: {
        name: "Washington Wizards",
        abbr: "WAS",
        spread: "+3.0",
        odds: [
          { bookmaker: "bet365", value: "+3.0", american: "1.91", highlighted: false },
          { bookmaker: "pinnacle", value: "+3.0", american: "1.94", highlighted: false },
          { bookmaker: "betvictor", value: "+3.5", american: "1.80", highlighted: false },
          { bookmaker: "williamhill", value: "+3.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "+2.5", american: "1.95", highlighted: true },
        ],
      },
      team2: {
        name: "Philadelphia 76ers",
        abbr: "PHI",
        spread: "-3.0",
        odds: [
          { bookmaker: "bet365", value: "-3.0", american: "1.91", highlighted: false },
          { bookmaker: "pinnacle", value: "-3.0", american: "1.96", highlighted: false },
          { bookmaker: "betvictor", value: "-3.5", american: "1.95", highlighted: false },
          { bookmaker: "williamhill", value: "-3.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "-2.5", american: "1.87", highlighted: false },
        ],
      },
    },
    {
      id: 2,
      time: "19:30",
      team1: {
        name: "Los Angeles Lakers",
        abbr: "LAL",
        spread: "-1.0",
        odds: [
          { bookmaker: "bet365", value: "-1.0", american: "1.95", highlighted: false },
          { bookmaker: "pinnacle", value: "+1.0", american: "1.95", highlighted: true },
          { bookmaker: "betvictor", value: "-1.5", american: "1.95", highlighted: false },
          { bookmaker: "williamhill", value: "-1.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "-1.5", american: "1.95", highlighted: false },
        ],
      },
      team2: {
        name: "Indiana Pacers",
        abbr: "IND",
        spread: "+1.0",
        odds: [
          { bookmaker: "bet365", value: "+1.0", american: "1.87", highlighted: false },
          { bookmaker: "pinnacle", value: "-1.0", american: "1.95", highlighted: false },
          { bookmaker: "betvictor", value: "+1.5", american: "1.80", highlighted: false },
          { bookmaker: "williamhill", value: "+1.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "+1.5", american: "1.87", highlighted: true },
        ],
      },
    },
    {
      id: 3,
      time: "19:30",
      team1: {
        name: "Los Angeles Clippers",
        abbr: "LAC",
        spread: "-1.5",
        odds: [
          { bookmaker: "bet365", value: "-3.0", american: "1.91", highlighted: false },
          { bookmaker: "pinnacle", value: "-3.0", american: "1.93", highlighted: false },
          { bookmaker: "betvictor", value: "-2.5", american: "1.80", highlighted: false },
          { bookmaker: "williamhill", value: "-3.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "-2.5", american: "1.87", highlighted: true },
        ],
      },
      team2: {
        name: "New York Knicks",
        abbr: "NY",
        spread: "+1.5",
        odds: [
          { bookmaker: "bet365", value: "+3.0", american: "1.91", highlighted: false },
          { bookmaker: "pinnacle", value: "+3.0", american: "1.97", highlighted: false },
          { bookmaker: "betvictor", value: "+2.5", american: "1.95", highlighted: false },
          { bookmaker: "williamhill", value: "+3.0", american: "1.91", highlighted: false },
          { bookmaker: "888", value: "", american: "", highlighted: false },
          { bookmaker: "betway", value: "+2.5", american: "1.95", highlighted: true },
        ],
      },
    },
  ]

  const bookmakers = [
    { id: "bet365", name: "bet365", logo: "/bet365.svg" },
    { id: "pinnacle", name: "PINNACLE", logo: "/placeholder.svg?height=30&width=80&text=PINNACLE" },
    { id: "betvictor", name: "BETVICTOR", logo: "/placeholder.svg?height=30&width=80&text=BETVICTOR" },
    { id: "williamhill", name: "William Hill", logo: "/williamhill.svg" },
    { id: "888", name: "888", logo: "/placeholder.svg?height=30&width=80&text=888" },
    { id: "betway", name: "betway", logo: "/betway.svg" },
  ]

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
            <span className="text-xs">🏀</span>
          </div>
          <h2 className="font-bold">NBA</h2>
        </div>
        <Link href="/nba" className="text-sm text-[#ff5722] flex items-center">
          See all
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Time (ET)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Game
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Open
              </th>
              {bookmakers.map((bookmaker) => (
                <th
                  key={bookmaker.id}
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <img
                    src={bookmaker.logo || "/placeholder.svg"}
                    alt={bookmaker.name}
                    className="h-5 mx-auto"
                    width={80}
                    height={30}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <>
                <tr key={`${game.id}-team1`} className="bg-white">
                  <td rowSpan={2} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="font-bold">TODAY,</div>
                    <div>{game.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">{game.team1.abbr}</span>
                      </div>
                      <span className="text-sm font-medium">{game.team1.abbr}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.team1.spread}</td>
                  {bookmakers.map((bookmaker) => {
                    const odds = game.team1.odds.find((o) => o.bookmaker === bookmaker.id)
                    return (
                      <td key={`${game.id}-${bookmaker.id}-team1`} className="px-6 py-4 whitespace-nowrap text-center">
                        {odds && odds.value && (
                          <div
                            className={`inline-block rounded px-3 py-1 text-sm ${odds.highlighted ? "bg-green-100 border border-green-300" : "bg-gray-100"}`}
                          >
                            {odds.value} {odds.american}
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
                <tr key={`${game.id}-team2`} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">{game.team2.abbr}</span>
                      </div>
                      <span className="text-sm font-medium">{game.team2.abbr}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.team2.spread}</td>
                  {bookmakers.map((bookmaker) => {
                    const odds = game.team2.odds.find((o) => o.bookmaker === bookmaker.id)
                    return (
                      <td key={`${game.id}-${bookmaker.id}-team2`} className="px-6 py-4 whitespace-nowrap text-center">
                        {odds && odds.value && (
                          <div
                            className={`inline-block rounded px-3 py-1 text-sm ${odds.highlighted ? "bg-green-100 border border-green-300" : "bg-gray-100"}`}
                          >
                            {odds.value} {odds.american}
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
                <tr key={`${game.id}-actions`} className="bg-white border-b">
                  <td colSpan={3 + bookmakers.length} className="px-6 py-2">
                    <div className="flex space-x-4 text-sm">
                      <button className="text-gray-700 hover:text-[#ff5722]">Projections</button>
                      <button className="text-gray-700 hover:text-[#ff5722]">Line Movement</button>
                      <button className="text-gray-700 hover:text-[#ff5722]">Picks</button>
                      <button className="text-gray-700 hover:text-[#ff5722]">Matchup</button>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

