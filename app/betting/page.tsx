'use client'

import { useState } from 'react'
import { 
  Clock, 
  Check, 
  X, 
  TrendingUp,
  Filter,
  BarChart,
  History,
  PlusCircle
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data for bets
const mockBets = [
  {
    id: 1,
    event: 'NBA - Lakers vs Celtics',
    selection: 'Lakers',
    stake: 50,
    odds: 2.10,
    potentialPayout: 105.00,
    status: 'open',
    date: new Date(2025, 2, 30),
    category: 'Basketball'
  },
  {
    id: 2,
    event: 'NFL - Eagles vs Cowboys',
    selection: 'Eagles +3.5',
    stake: 25,
    odds: 1.91,
    potentialPayout: 47.75,
    status: 'open',
    date: new Date(2025, 2, 28),
    category: 'Football'
  },
  {
    id: 3,
    event: 'UFC 300 - Jones vs Miocic',
    selection: 'Jones by KO/TKO',
    stake: 40,
    odds: 2.75,
    potentialPayout: 110.00,
    status: 'won',
    date: new Date(2025, 2, 15),
    category: 'MMA',
    winAmount: 110.00
  },
  {
    id: 4,
    event: 'Premier League - Arsenal vs Liverpool',
    selection: 'Draw',
    stake: 30,
    odds: 3.40,
    potentialPayout: 102.00,
    status: 'lost',
    date: new Date(2025, 2, 10),
    category: 'Soccer',
    winAmount: 0
  },
  {
    id: 5,
    event: 'MLB - Yankees vs Red Sox',
    selection: 'Yankees -1.5',
    stake: 20,
    odds: 2.20,
    potentialPayout: 44.00,
    status: 'won',
    date: new Date(2025, 2, 5),
    category: 'Baseball',
    winAmount: 44.00
  }
];

// Mock popular bets
const popularBets = [
  {
    id: 101,
    event: 'Premier League - Man City vs Man United',
    market: 'Match Winner',
    date: new Date(2025, 3, 2),
    options: [
      { name: 'Man City', odds: 1.70 },
      { name: 'Draw', odds: 3.60 },
      { name: 'Man United', odds: 5.20 }
    ]
  },
  {
    id: 102,
    event: 'NBA - Nuggets vs Bucks',
    market: 'Money Line',
    date: new Date(2025, 3, 1),
    options: [
      { name: 'Nuggets', odds: 2.10 },
      { name: 'Bucks', odds: 1.80 }
    ]
  }
];

export default function BettingPage() {
  const [activeTab, setActiveTab] = useState('active')
  const [categoryFilter, setCategoryFilter] = useState('all')
  
  // Filter bets based on active tab and category filter
  const filteredBets = mockBets.filter(bet => {
    const statusMatch = 
      activeTab === 'active' ? bet.status === 'open' : 
      activeTab === 'history' ? bet.status !== 'open' : true;
    
    const categoryMatch = categoryFilter === 'all' ? true : bet.category === categoryFilter;
    
    return statusMatch && categoryMatch;
  });
  
  // Get unique categories for filter
  const categories = ['all', ...new Set(mockBets.map(bet => bet.category))];
  
  // Calculate betting stats
  const openBetsCount = mockBets.filter(bet => bet.status === 'open').length;
  const wonBetsCount = mockBets.filter(bet => bet.status === 'won').length;
  const totalStaked = mockBets.reduce((sum, bet) => sum + bet.stake, 0);
  const totalWon = mockBets
    .filter(bet => bet.status === 'won')
    .reduce((sum, bet) => sum + (bet.winAmount || 0), 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">My Bets</h1>
      
      {/* Betting Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Open Bets</p>
                <p className="text-2xl font-bold">{openBetsCount}</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Won Bets</p>
                <p className="text-2xl font-bold">{wonBetsCount}</p>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <Check className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Staked</p>
                <p className="text-2xl font-bold">${totalStaked.toFixed(2)}</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-full">
                <BarChart className="h-5 w-5 text-[#ff5722]" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Won</p>
                <p className="text-2xl font-bold">${totalWon.toFixed(2)}</p>
              </div>
              <div className="p-2 bg-emerald-100 rounded-full">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Bets Tabs and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <CardTitle>My Bets</CardTitle>
            <div className="flex items-center space-x-2">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Sport" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Sports' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full mb-6">
              <TabsTrigger value="active" className="flex-1">
                <Clock className="mr-2 h-4 w-4" /> Active Bets
              </TabsTrigger>
              <TabsTrigger value="history" className="flex-1">
                <History className="mr-2 h-4 w-4" /> Bet History
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="active" className="space-y-4">
              {filteredBets.length > 0 ? (
                filteredBets.map(bet => (
                  <Card key={bet.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{bet.event}</p>
                          <p className="text-sm text-muted-foreground">
                            {bet.date.toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant="outline" className="bg-blue-50">Pending</Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Your Pick</p>
                          <p className="font-medium">{bet.selection}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Stake</p>
                          <p className="font-medium">${bet.stake.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Odds</p>
                          <p className="font-medium">{bet.odds.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Potential Payout</p>
                          <p className="font-medium text-[#ff5722]">${bet.potentialPayout.toFixed(2)}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No active bets found</p>
                  <Button className="mt-4 bg-[#ff5722] hover:bg-[#e64a19]">
                    <PlusCircle className="mr-2 h-4 w-4" /> Place a Bet
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              {filteredBets.length > 0 ? (
                filteredBets.map(bet => (
                  <Card key={bet.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{bet.event}</p>
                          <p className="text-sm text-muted-foreground">
                            {bet.date.toLocaleDateString()}
                          </p>
                        </div>
                        <Badge 
                          variant={bet.status === 'won' ? 'default' : 'destructive'}
                          className={bet.status === 'won' ? 'bg-green-100 text-green-800 hover:bg-green-100' : ''}
                        >
                          {bet.status === 'won' ? 'Won' : 'Lost'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Your Pick</p>
                          <p className="font-medium">{bet.selection}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Stake</p>
                          <p className="font-medium">${bet.stake.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Odds</p>
                          <p className="font-medium">{bet.odds.toFixed(2)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Outcome</p>
                          <p className={`font-medium ${bet.status === 'won' ? 'text-green-600' : 'text-red-600'}`}>
                            {bet.status === 'won' ? `+$${bet.winAmount.toFixed(2)}` : '-$' + bet.stake.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No bet history found</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button variant="outline" className="w-full">Load More</Button>
        </CardFooter>
      </Card>
      
      {/* Popular Bets Section */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Bets</CardTitle>
          <CardDescription>Trending bets you might be interested in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {popularBets.map(bet => (
            <div key={bet.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold">{bet.event}</p>
                  <p className="text-sm text-muted-foreground">
                    {bet.market} • {bet.date.toLocaleDateString()}
                  </p>
                </div>
                <Badge className="bg-[#ff5722] hover:bg-[#ff5722]">Popular</Badge>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {bet.options.map((option, index) => (
                  <Button key={index} variant="outline" className="justify-between py-5">
                    <span>{option.name}</span>
                    <Badge variant="outline" className="ml-2 bg-blue-50">
                      {option.odds.toFixed(2)}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button className="w-full bg-[#ff5722] hover:bg-[#e64a19]">Browse All Bets</Button>
        </CardFooter>
      </Card>
    </div>
  )
}