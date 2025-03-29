import { Calendar, Trophy, Star, TrendingUp, BarChart } from "lucide-react"
import Link from "next/link"

interface EventDetails {
  id: string
  name: string
  description: string
  date: string
  location: string
  image?: string
  trending?: boolean
  teams?: { name: string; logo?: string }[]
  upcomingMatches?: {
    id: string
    teams: string[]
    date: string
    time: string
  }[]
  bettingMarkets?: {
    name: string
    description: string
  }[]
}

// Mock data for events
const eventsData: Record<string, EventDetails> = {
  "T20-world-cup": {
    id: "T20-world-cup",
    name: "T20 World Cup",
    description: "The ICC Men's T20 World Cup is the international championship of Twenty20 cricket. Organized by cricket's governing body, the International Cricket Council (ICC), the tournament consists of 16 teams, featuring a mixture of all Test-playing nations and the best associate nations.",
    date: "Oct 1 - Nov 14, 2024",
    location: "West Indies & United States",
    trending: true,
    teams: [
      { name: "India" },
      { name: "England" },
      { name: "Australia" },
      { name: "Pakistan" },
      { name: "South Africa" },
      { name: "New Zealand" },
      { name: "West Indies" },
      { name: "Sri Lanka" }
    ],
    upcomingMatches: [
      { id: "match1", teams: ["India", "Australia"], date: "Oct 8, 2024", time: "7:30 PM IST" },
      { id: "match2", teams: ["England", "South Africa"], date: "Oct 10, 2024", time: "8:00 PM BST" },
      { id: "match3", teams: ["Pakistan", "New Zealand"], date: "Oct 12, 2024", time: "6:30 PM PKT" }
    ],
    bettingMarkets: [
      { name: "Tournament Winner", description: "Bet on which team will win the T20 World Cup" },
      { name: "Top Run Scorer", description: "Bet on which player will score the most runs in the tournament" },
      { name: "Top Wicket Taker", description: "Bet on which player will take the most wickets" },
      { name: "Match Winners", description: "Bet on individual match outcomes throughout the tournament" }
    ]
  },
  "march-madness": {
    id: "march-madness",
    name: "March Madness",
    description: "The NCAA Division I Men's Basketball Tournament is a single-elimination tournament of 68 teams that compete in seven rounds for the national championship. The tournament is one of the most famous annual sporting events in the United States.",
    date: "Mar 15 - Apr 4, 2024",
    location: "Various locations across the USA",
    teams: [
      { name: "Gonzaga" },
      { name: "Baylor" },
      { name: "Michigan" },
      { name: "Illinois" },
      { name: "Duke" },
      { name: "Kentucky" }
    ],
    upcomingMatches: [
      { id: "mm1", teams: ["Gonzaga", "Baylor"], date: "Mar 18, 2024", time: "8:00 PM ET" },
      { id: "mm2", teams: ["Michigan", "Illinois"], date: "Mar 19, 2024", time: "7:30 PM ET" },
      { id: "mm3", teams: ["Duke", "Kentucky"], date: "Mar 20, 2024", time: "9:00 PM ET" }
    ],
    bettingMarkets: [
      { name: "Tournament Winner", description: "Pick which team will win the national championship" },
      { name: "Final Four Teams", description: "Select which teams will make it to the Final Four" },
      { name: "Round of 16", description: "Pick which teams will advance to the Sweet 16" },
      { name: "First Round Upsets", description: "Bet on potential first-round upsets by lower seeds" }
    ]
  },
  "super-bowl": {
    id: "super-bowl",
    name: "Super Bowl",
    description: "The Super Bowl is the annual championship game of the National Football League (NFL), the highest level of professional American football in the United States, culminating a season that begins in the previous calendar year.",
    date: "Feb 11, 2024",
    location: "New Orleans, Louisiana",
    teams: [
      { name: "Kansas City Chiefs" },
      { name: "San Francisco 49ers" }
    ],
    bettingMarkets: [
      { name: "Game Winner", description: "Bet on which team will win the Super Bowl" },
      { name: "Point Spread", description: "Bet on the margin of victory" },
      { name: "Over/Under", description: "Bet on the total points scored in the game" },
      { name: "Player Props", description: "Bet on individual player performances" },
      { name: "Exotic Props", description: "Bet on special events like coin toss, halftime show, etc." }
    ]
  },
  "nba-playoffs": {
    id: "nba-playoffs",
    name: "NBA Playoffs",
    description: "The NBA playoffs are a best-of-seven elimination tournament annually held after the National Basketball Association (NBA) regular season to determine the league's champion.",
    date: "Apr 15 - Jun 15, 2024",
    location: "Various NBA arenas",
    teams: [
      { name: "Boston Celtics" },
      { name: "Los Angeles Lakers" },
      { name: "Milwaukee Bucks" },
      { name: "Denver Nuggets" },
      { name: "Miami Heat" },
      { name: "Golden State Warriors" },
      { name: "Phoenix Suns" },
      { name: "Philadelphia 76ers" }
    ],
    upcomingMatches: [
      { id: "nba1", teams: ["Boston Celtics", "Miami Heat"], date: "Apr 18, 2024", time: "7:30 PM ET" },
      { id: "nba2", teams: ["Los Angeles Lakers", "Denver Nuggets"], date: "Apr 19, 2024", time: "10:00 PM ET" },
      { id: "nba3", teams: ["Milwaukee Bucks", "Philadelphia 76ers"], date: "Apr 20, 2024", time: "8:00 PM ET" }
    ],
    bettingMarkets: [
      { name: "Championship Winner", description: "Bet on which team will win the NBA Finals" },
      { name: "Conference Winners", description: "Bet on which teams will win the Eastern and Western Conferences" },
      { name: "Series Winners", description: "Bet on which teams will win each playoff series" },
      { name: "Series Length", description: "Bet on how many games each series will last" }
    ]
  }
}

export default async function EventPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const eventData = eventsData[slug] || {
    id: slug,
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Details coming soon for this exciting sporting event.",
    date: "TBD",
    location: "TBD",
    bettingMarkets: []
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#ff5722] to-[#ff9800] p-6 text-white">
            <div className="flex items-center mb-2">
              <Trophy className="h-8 w-8 mr-3" />
              <h1 className="text-3xl font-bold">{eventData.name}</h1>
              {eventData.trending && (
                <span className="ml-4 bg-red-600 text-white text-sm px-2 py-1 rounded-full flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Trending
                </span>
              )}
            </div>
            <div className="flex items-center text-sm opacity-90">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{eventData.date}</span>
              <span className="mx-2">•</span>
              <span>{eventData.location}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-3">About This Event</h2>
              <p className="text-gray-700">{eventData.description}</p>
            </div>

            {eventData.teams && eventData.teams.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Teams</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {eventData.teams.map((team, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        {team.logo ? (
                          <img src={team.logo} alt={team.name} className="h-8 w-8" />
                        ) : (
                          <span className="text-gray-500 font-bold">{team.name.charAt(0)}</span>
                        )}
                      </div>
                      <span className="font-medium">{team.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {eventData.upcomingMatches && eventData.upcomingMatches.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Upcoming Matches</h2>
                <div className="space-y-3">
                  {eventData.upcomingMatches.map((match) => (
                    <Link 
                      href={`/betting?match=${match.id}`}
                      key={match.id} 
                      className="block bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{match.teams.join(' vs ')}</div>
                          <div className="text-sm text-gray-500">{match.date} • {match.time}</div>
                        </div>
                        <div className="text-[#ff5722] font-medium text-sm">View Odds →</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {eventData.bettingMarkets && eventData.bettingMarkets.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Betting Markets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventData.bettingMarkets.map((market, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <BarChart className="h-5 w-5 text-[#ff5722] mt-0.5 mr-2" />
                        <div>
                          <div className="font-semibold">{market.name}</div>
                          <div className="text-sm text-gray-600">{market.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Link 
                    href="/betting"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5722] text-white font-medium rounded-lg hover:bg-[#e64a19] transition-colors"
                  >
                    View All Betting Options
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Related News & Analysis</h2>
              <div className="space-y-4">
                <p className="text-gray-500 italic text-center py-4">Latest news and analysis will appear here as the event approaches.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Top Sportsbooks</h2>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded p-4 flex items-center">
                  <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center mr-4">
                    <span className="font-bold text-gray-800">B1</span>
                  </div>
                  <div>
                    <div className="font-medium">Bet365</div>
                    <div className="text-sm text-green-600">$500 Bonus</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-4 flex items-center">
                  <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center mr-4">
                    <span className="font-bold text-gray-800">B2</span>
                  </div>
                  <div>
                    <div className="font-medium">William Hill</div>
                    <div className="text-sm text-green-600">$300 Free Bet</div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded p-4 flex items-center">
                  <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center mr-4">
                    <span className="font-bold text-gray-800">B3</span>
                  </div>
                  <div>
                    <div className="font-medium">Betway</div>
                    <div className="text-sm text-green-600">$250 Deposit Match</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/odds" className="text-[#ff5722] font-medium text-sm hover:underline">
                  Compare All Sportsbooks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}