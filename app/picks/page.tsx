"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Trophy, 
  Star, 
  TrendingUp, 
  ThumbsUp, 
  Users, 
  Filter,
  Calendar,
  Percent
} from "lucide-react"

interface Pick {
  id: string
  sport: string
  league: string
  match: string
  date: string
  expertName: string
  prediction: string
  odds: string
  confidence: number
  reasoning: string
  likes: number
  isHot?: boolean
}

export default function PicksPage() {
  const [filter, setFilter] = useState<string>("all")
  const [picks, setPicks] = useState<Pick[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - in a real app, fetch this from an API
  useEffect(() => {
    const mockPicks: Pick[] = [
        {
            id: "5",
            sport: "Cricket",
            league: "IPL",
            match: "Mumbai Indians vs Chennai Super Kings",
            date: "Thu, Apr 6, 10:00 AM ET",
            expertName: "Raj Patel",
            prediction: "Mumbai Indians ML",
            odds: "-105",
            confidence: 7,
            reasoning: "Mumbai has home field advantage and their batting lineup is at full strength.",
            likes: 231,
            isHot: true
          },
      {
        id: "1",
        sport: "NFL Football",
        league: "NFL",
        match: "Kansas City Chiefs vs Buffalo Bills",
        date: "Sun, Apr 2, 4:25 PM ET",
        expertName: "Mike Johnson",
        prediction: "Chiefs -2.5",
        odds: "-110",
        confidence: 8,
        reasoning: "Chiefs have won 7 of their last 8 home games and Mahomes is coming off a strong performance last week.",
        likes: 342
      },
      {
        id: "2",
        sport: "Basketball",
        league: "NBA",
        match: "Boston Celtics vs LA Lakers",
        date: "Mon, Apr 3, 7:30 PM ET",
        expertName: "Sarah Williams",
        prediction: "Celtics ML",
        odds: "-125",
        confidence: 7,
        reasoning: "Celtics have been dominant at home and Lakers are on the second night of a back-to-back.",
        likes: 218
      },
      {
        id: "3",
        sport: "Soccer",
        league: "Premier League",
        match: "Manchester City vs Arsenal",
        date: "Sat, Apr 1, 10:00 AM ET",
        expertName: "David Thompson",
        prediction: "Over 2.5 Goals",
        odds: "-115",
        confidence: 9,
        reasoning: "Both teams are in top offensive form, averaging over 2 goals per game in their last 5 matches.",
        likes: 276
      },
      {
        id: "4",
        sport: "Baseball",
        league: "MLB",
        match: "New York Yankees vs Boston Red Sox",
        date: "Tue, Apr 4, 1:05 PM ET",
        expertName: "Chris Rogers",
        prediction: "Yankees -1.5",
        odds: "+135",
        confidence: 6,
        reasoning: "Yankees have Cole on the mound and he's been dominant against Boston historically.",
        likes: 187
      }
      
    ]

    // Simulate API fetch
    setTimeout(() => {
      setPicks(mockPicks)
      setLoading(false)
    }, 500)
  }, [])

  const filteredPicks = filter === "all" 
    ? picks 
    : picks.filter(pick => pick.sport.toLowerCase().includes(filter) || pick.league.toLowerCase().includes(filter))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Expert Picks</h1>
          <p className="text-gray-600 mt-2">Professional insights and predictions to help inform your bets</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-[#ff5722] text-white rounded-lg flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Premium Picks
          </button>
          <div className="relative">
            <div className="flex items-center border rounded-lg px-4 py-2">
              <Filter className="h-4 w-4 mr-2 text-gray-500" />
              <select 
                className="bg-transparent appearance-none focus:outline-none pr-8"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Sports</option>
                <option value="nfl">NFL</option>
                <option value="nba">NBA</option>
                <option value="mlb">MLB</option>
                <option value="soccer">Soccer</option>
                <option value="cricket">Cricket</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#ff5722]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredPicks.map((pick) => (
            <div key={pick.id} className="border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">{pick.sport} • {pick.league}</span>
                    {pick.isHot && (
                      <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Hot Pick
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pick.match}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {pick.date}
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-[#ff5722] mr-2" />
                        <span className="font-medium">Expert Pick: <span className="text-[#ff5722] font-bold">{pick.prediction}</span></span>
                      </div>
                      <div className="flex items-center">
                        <Percent className="h-4 w-4 mr-1 text-gray-600" />
                        <span>Odds: {pick.odds}</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="text-sm mr-2">Confidence:</span>
                      <div className="h-2 bg-gray-200 rounded-full flex-1 max-w-[200px]">
                        <div 
                          className="h-full bg-[#ff5722] rounded-full" 
                          style={{ width: `${(pick.confidence / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{pick.confidence}/10</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Analysis:</h4>
                    <p className="text-gray-700">{pick.reasoning}</p>
                  </div>
                </div>
                
                <div className="md:ml-6 flex flex-col items-center justify-center mt-4 md:mt-0 md:w-40 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
                  <div className="flex flex-col items-center">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${pick.expertName.replace(' ', '+')}&background=random`} 
                      alt={pick.expertName}
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <span className="font-medium text-center">{pick.expertName}</span>
                    <span className="text-xs text-gray-500 mb-3">Expert Analyst</span>
                  </div>
                  
                  <button className="flex items-center text-gray-700 hover:text-[#ff5722] transition-colors">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{pick.likes}</span>
                  </button>
                  
                  <Link 
                    href={`/picks/${pick.id}`}
                    className="mt-4 px-4 py-2 border border-[#ff5722] text-[#ff5722] rounded-md hover:bg-[#ff5722] hover:text-white transition-colors text-sm text-center w-full"
                  >
                    View Full Analysis
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Consensus Picks</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="font-medium">Public Betting Trends</h3>
            </div>
            <div className="space-y-3 mt-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Chiefs -2.5</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Lakers +4.5</span>
                  <span className="font-medium">57%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "57%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Man City ML</span>
                  <span className="font-medium">73%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "73%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
            <div className="flex items-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
              <h3 className="font-medium">Line Movement</h3>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex justify-between items-center">
                <span>Chiefs vs Bills</span>
                <div className="flex items-center text-green-600">
                  <span className="font-medium">-1.5</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium">-2.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Celtics vs Lakers</span>
                <div className="flex items-center text-red-600">
                  <span className="font-medium">-5.5</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium">-4.5</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Yankees vs Red Sox</span>
                <div className="flex items-center text-gray-500">
                  <span className="font-medium">-1.5</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium">-1.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}