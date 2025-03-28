import Link from "next/link"

export default function NCAABOdds() {
  const games = [
    {
      id: 1,
      date: "28 Mar",
      time: "9:00pm ET",
      team1: {
        name: "UAB Blazers",
        abbr: "UAB",
        percentage: "51%",
        spread: "+4.5",
        spreadOdds: "-110",
        bookmaker: "PINNACLE",
      },
      team2: {
        name: "UC Irvine Anteaters",
        abbr: "UCI",
        percentage: "49%",
        spread: "-4.5",
        spreadOdds: "-105",
        bookmaker: "bet365",
      },
    },
    {
      id: 2,
      date: "27 Mar",
      time: "7:00pm ET",
      team1: {
        name: "BYU Cougars",
        abbr: "BYU",
        percentage: "44%",
        spread: "+5.5",
        spreadOdds: "-110",
        bookmaker: "bet365",
      },
      team2: {
        name: "Alabama Crimson Tide",
        abbr: "ALA",
        percentage: "56%",
        spread: "-5.5",
        spreadOdds: "-116",
        bookmaker: "PINNACLE",
      },
    },
  ]

  const bookmakers = [
    { id: "bet365", name: "bet365", logo: "/bet365svg" },
    { id: "pinnacle", name: "PINNACLE", logo: "/pinnacle.svg" },
    { id: "betvictor", name: "BETVICTOR", logo: "/betvictor.svg" },
    { id: "williamhill", name: "William Hill", logo: "williamhill.svg" },
    { id: "888", name: "888", logo: "/888sport.svg" },
    { id: "betway", name: "betway", logo: "/betway.svg" },
  ]

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
            <span className="text-xs">🏀</span>
          </div>
          <h2 className="font-bold">NCAAB</h2>
        </div>
        <Link href="/ncaab" className="text-sm text-[#ff5722] flex items-center">
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
                Date
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
                Percentage
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Spread
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <>
                <tr key={`${game.id}-team1`} className="bg-white">
                  <td rowSpan={2} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="font-bold">{game.date}</div>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{game.team1.percentage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                        {game.team1.spread} {game.team1.spreadOdds}
                      </span>
                      <img
                        src={`/placeholder.svg?height=20&width=60&text=${game.team1.bookmaker}`}
                        alt={game.team1.bookmaker}
                        className="h-4"
                        width={60}
                        height={20}
                      />
                    </div>
                  </td>
                </tr>
                <tr key={`${game.id}-team2`} className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-xs">{game.team2.abbr}</span>
                      </div>
                      <span className="text-sm font-medium">{game.team2.abbr}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{game.team2.percentage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                        {game.team2.spread} {game.team2.spreadOdds}
                      </span>
                      <img
                        src={`/placeholder.svg?height=20&width=60&text=${game.team2.bookmaker}`}
                        alt={game.team2.bookmaker}
                        className="h-4"
                        width={60}
                        height={20}
                      />
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

