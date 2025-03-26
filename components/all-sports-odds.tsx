import Link from "next/link"
import { sportsData } from "@/lib/sports-data"

export default function AllSportsOdds() {
  return (
    <div className="space-y-8">
      {sportsData.map((sport) => (
        <SportSection key={sport.id} sport={sport} />
      ))}
    </div>
  )
}

function SportSection({ sport }) {
  if (!sport.games || sport.games.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs">{sport.icon}</span>
          </div>
          <h2 className="font-bold">{sport.name}</h2>
        </div>
        <Link href={`/${sport.slug}`} className="text-sm text-[#ff5722] flex items-center">
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
              {sport.bookmakers.map((bookmaker) => (
                <th
                  key={bookmaker.id}
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <img
                    src={`/placeholder.svg?height=20&width=80&text=${bookmaker.name}`}
                    alt={bookmaker.name}
                    className="h-5 mx-auto"
                    width={80}
                    height={20}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sport.games.map((game) => (
              <GameRow key={game.id} game={game} bookmakers={sport.bookmakers} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GameRow({ game, bookmakers }) {
  return (
    <>
      <tr>
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
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.team1.open}</td>
        {bookmakers.map((bookmaker) => {
          const odds = game.team1.odds.find((o) => o.bookmaker === bookmaker.id)
          return (
            <td key={bookmaker.id} className="px-6 py-4 whitespace-nowrap text-center">
              {odds && (
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
      <tr className="border-b border-gray-200">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-xs">{game.team2.abbr}</span>
            </div>
            <span className="text-sm font-medium">{game.team2.abbr}</span>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{game.team2.open}</td>
        {bookmakers.map((bookmaker) => {
          const odds = game.team2.odds.find((o) => o.bookmaker === bookmaker.id)
          return (
            <td key={bookmaker.id} className="px-6 py-4 whitespace-nowrap text-center">
              {odds && (
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
      <tr>
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
  )
}

