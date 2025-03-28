'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { 
  Trophy,
  TrendingUp,
  Zap,
  Star,
  DollarSign,
  Timer,
  Calendar,
  Tags
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SportsTabs from "@/components/sports-tabs"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("featured")
  
  // Mock featured games data
  const featuredGames = [
    {
      id: 1,
      homeTeam: {
        name: "Lakers",
        logo: "/team-logos/lakers.png",
        odds: "-110"
      },
      awayTeam: {
        name: "Celtics",
        logo: "/team-logos/celtics.png",
        odds: "+105"
      },
      league: "NBA",
      time: "7:30 PM",
      date: "Mar 30",
      featured: true,
    },
    {
      id: 2,
      homeTeam: {
        name: "Chiefs",
        logo: "/team-logos/chiefs.png",
        odds: "-140"
      },
      awayTeam: {
        name: "49ers",
        logo: "/team-logos/49ers.png",
        odds: "+120"
      },
      league: "NFL",
      time: "4:25 PM",
      date: "Mar 31",
      featured: true,
    },
    {
      id: 3,
      homeTeam: {
        name: "Gonzaga",
        logo: "/team-logos/gonzaga.png",
        odds: "-120"
      },
      awayTeam: {
        name: "Duke",
        logo: "/team-logos/duke.png",
        odds: "+100"
      },
      league: "NCAAB",
      time: "9:00 PM",
      date: "Mar 29",
      featured: true,
    },
    {
      id: 4,
      homeTeam: {
        name: "Arsenal",
        logo: "/team-logos/arsenal.png",
        odds: "+110"
      },
      awayTeam: {
        name: "Liverpool",
        logo: "/team-logos/liverpool.png",
        odds: "+120"
      },
      drawOdds: "+240",
      league: "Premier League",
      time: "11:30 AM",
      date: "Mar 30",
      featured: false,
    }
  ]
  
  // Mock promos data
  const promos = [
    {
      id: 1,
      title: "March Madness Special",
      description: "Get $200 in bonus bets when you place your first $5 bet on any March Madness game",
      code: "MARCH200",
      bgColor: "bg-gradient-to-r from-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "Bet & Get",
      description: "Place $50 in bets and receive a $25 free bet",
      code: "BETGET25",
      bgColor: "bg-gradient-to-r from-[#ff5722] to-orange-700"
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#1c2a38] to-[#2b3a4a] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">The Best Place to Bet on Sports</h1>
              <p className="text-gray-300 mb-8">Get exclusive odds, expert picks, and promotions all in one place.</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">
                  Place a Bet Now
                </Button>
                <Button variant="outline" className="text-black border-white ">
                  View All Sports
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-64">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700/70 to-[#ff5722]/70 flex items-center justify-center">
                  <Trophy className="h-24 w-24 text-white opacity-75" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Quick Sports Selection Tabs */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Popular Sports</h2>
          <SportsTabs />
        </div>
        
        {/* Featured Matchups Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Top Matchups</h2>
            <Link href="/matchups" className="text-[#ff5722] hover:underline font-medium flex items-center">
              View All <Zap className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="live">Live Now</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.filter(game => 
              activeTab === "featured" ? game.featured : true
            ).map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="px-4 py-3 bg-gray-50 border-b flex justify-between items-center">
                  <div className="flex items-center">
                    <Badge variant="outline" className="bg-white">
                      {game.league}
                    </Badge>
                    <div className="ml-3 flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {game.date}
                    </div>
                    <div className="ml-3 flex items-center text-sm text-muted-foreground">
                      <Timer className="mr-1 h-3 w-3" />
                      {game.time}
                    </div>
                  </div>
                  <Star className="h-4 w-4 text-gray-400 cursor-pointer hover:text-[#ff5722]" />
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {/* Home team logo would go here */}
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xs font-bold">{game.homeTeam.name.substring(0, 2)}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{game.homeTeam.name}</p>
                          <p className="text-xs text-muted-foreground">Home</p>
                        </div>
                      </div>
                      <Button variant="outline" className="h-9">
                        {game.homeTeam.odds}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {/* Away team logo would go here */}
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xs font-bold">{game.awayTeam.name.substring(0, 2)}</span>
                        </div>
                        <div>
                          <p className="font-semibold">{game.awayTeam.name}</p>
                          <p className="text-xs text-muted-foreground">Away</p>
                        </div>
                      </div>
                      <Button variant="outline" className="h-9">
                        {game.awayTeam.odds}
                      </Button>
                    </div>
                    
                    {game.drawOdds && (
                      <div className="mt-2 pt-2 border-t">
                        <Button variant="outline" className="w-full justify-between">
                          <span>Draw</span>
                          <Badge variant="outline">{game.drawOdds}</Badge>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 py-2">
                  <Button variant="ghost" className="w-full text-[#ff5722]">
                    View All Markets
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Promotions Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Promotions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promos.map(promo => (
              <div 
                key={promo.id}
                className={`rounded-xl p-6 text-white ${promo.bgColor}`}
              >
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="mb-4 text-white/85">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-white/20 rounded-md px-3 py-1 text-sm">
                    Code: <span className="font-bold">{promo.code}</span>
                  </div>
                  <Button variant="secondary" className="bg-white text-gray-800 hover:bg-white/90">
                    Claim Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* March Madness Section */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0">
                <Badge className="bg-white text-blue-800 mb-4">SPECIAL EVENT</Badge>
                <h2 className="text-3xl font-bold mb-4">March Madness 2025</h2>
                <p className="mb-6 text-blue-100">
                  The biggest college basketball tournament is here! Place your brackets,
                  follow your team, and win big with special bonuses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-blue-800 hover:bg-white/90">
                    View Brackets
                  </Button>
                  <Button  className="text-white  bg-[#ff5722]">
                    Place Bets
                  </Button>
                </div>
              </div>
              <div className="md:ml-10 flex-shrink-0">
                <div className="w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
                  <Trophy className="h-20 w-20 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Sportsbooks Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Sportsbooks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex flex-col">
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-200 h-12 w-24 rounded-md flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-gray-500" />
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill={star <= 4 ? 'currentColor' : 'none'} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-bold mb-1">Sportsbook {item}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Top rated sportsbook with great odds and fast payouts.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Tags className="h-4 w-4 text-green-500 mr-2" />
                      <span>$500 Welcome Bonus</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Tags className="h-4 w-4 text-green-500 mr-2" />
                      <span>Fast Withdrawals</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button className="w-full bg-[#ff5722] hover:bg-[#e64a19]">
                    Visit Sportsbook
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="rounded-lg border p-4">
          <h3 className="font-medium mb-3">Quick Links</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/ncaab/scoreboards" className="text-gray-700 hover:text-[#ff5722]">
              NCAAB Scoreboards
            </Link>
            <Link href="/ncaab/odds" className="text-gray-700 hover:text-[#ff5722]">
              NCAAB Odds
            </Link>
            <Link href="/ncaab/consensus" className="text-gray-700 hover:text-[#ff5722]">
              NCAAB Consensus
            </Link>
            <Link href="/nba/odds" className="text-gray-700 hover:text-[#ff5722]">
              NBA Odds
            </Link>
            <Link href="/nfl/odds" className="text-gray-700 hover:text-[#ff5722]">
              NFL Odds
            </Link>
            <Link href="/mlb/odds" className="text-gray-700 hover:text-[#ff5722]">
              MLB Odds
            </Link>
            <Link href="/promos" className="text-gray-700 hover:text-[#ff5722]">
              Latest Promos
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

