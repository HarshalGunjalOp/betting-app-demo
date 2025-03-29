'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star, TrendingUp, Calendar, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Team {
  id: string;
  name: string;
  logo: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  odds: {
    home: number;
    draw: number;
    away: number;
  };
}

interface League {
  id: string;
  slug: string;
  name: string;
  logo: string;
  country: string;
  season: string;
  teams: Team[];
  upcomingMatches: Match[];
  recentMatches: Match[];
}

export default function LeaguePage() {
  const router = useRouter();
  const { slug } = useParams();
  const [league, setLeague] = useState<League | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBets, setSelectedBets] = useState<Record<string, string>>({});
  const [betSlip, setBetSlip] = useState<Array<{ matchId: string; betType: string; odds: number }>>([]);
  const betSlipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLeagueData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an actual API call
        // const response = await fetch(`/api/leagues/${slug}`);
        // const data = await response.json();
        
        // Mock data for demonstration
        setTimeout(() => {
          const mockLeague: League = {
            id: '1',
            slug: slug as string,
            name: slug === 'premier-league' ? 'Premier League' : 'La Liga',
            logo: `/team.png`,
            country: slug === 'premier-league' ? 'England' : 'Spain',
            season: '2023/2024',
            teams: Array(20)
              .fill(0)
              .map((_, i) => ({
                id: `team-${i}`,
                name: `Team ${i + 1}`,
                logo: `/team.png`,
                position: i + 1,
                played: 10,
                won: 10 - Math.floor(i / 2),
                drawn: Math.floor(i / 4),
                lost: Math.floor(i / 2),
                points: 30 - i,
              })),
            upcomingMatches: Array(5)
              .fill(0)
              .map((_, i) => ({
                id: `match-upcoming-${i}`,
                homeTeam: { id: `team-${i * 2}`, name: `Team ${i * 2 + 1}`, logo: `/team.png` } as Team,
                awayTeam: { id: `team-${i * 2 + 1}`, name: `Team ${i * 2 + 2}`, logo: `/team.png` } as Team,
                date: new Date(Date.now() + (i + 1) * 86400000).toLocaleDateString(),
                time: '15:00',
                odds: {
                  home: 1.5 + Math.random(),
                  draw: 3.2 + Math.random(),
                  away: 2.1 + Math.random(),
                },
              })),
            recentMatches: Array(3).fill(0).map((_, i) => ({
              id: `match-recent-${i}`,
              homeTeam: { id: `team-${i}`, name: `Team ${i + 1}`, logo: `/team.png` } as Team,
              awayTeam: { id: `team-${i + 1}`, name: `Team ${i + 2}`, logo: `/team.png` } as Team,
              date: new Date(Date.now() - (i + 1) * 86400000).toLocaleDateString(),
              time: '17:00',
              odds: {
                home: 1.5 + Math.random(),
                draw: 3.2 + Math.random(),
                away: 2.1 + Math.random(),
              },
            })),
          };
          
          setLeague(mockLeague);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch league data');
        setLoading(false);
      }
    };

    if (slug) {
      fetchLeagueData();
    }
  }, [slug]);

  const handleBetSelection = (matchId: string, betType: string) => {
    setSelectedBets(prev => ({
      ...prev,
      [matchId]: betType,
    }));
  };

  const addToBetSlip = (matchId: string) => {
    const betType = selectedBets[matchId];
    if (!betType || !league) return;
    
    const match = league.upcomingMatches.find(m => m.id === matchId);
    if (!match) return;

    const odds = match.odds[betType as 'home' | 'draw' | 'away'];
    setBetSlip(prev => [...prev, { matchId, betType, odds }]);
    // Optional: clear the selected bet after adding
    setSelectedBets(prev => ({ ...prev, [matchId]: '' }));
  };

  const removeFromBetSlip = (matchId: string) => {
    setBetSlip(prev => prev.filter(bet => bet.matchId !== matchId));
  };

  if (loading) {
    return <LeaguePageSkeleton />;
  }

  if (error || !league) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p>{error || 'League not found'}</p>
        <Button asChild className="mt-4">
          <Link href="/leagues">Back to Leagues</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative h-16 w-16">
          <Image
            src={league.logo || '/team.png'}
            alt={league.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{league.name}</h1>
          <p className="text-muted-foreground">
            {league.country} • {league.season} Season
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Tabs defaultValue="matches" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="standings">Standings</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
            </TabsList>

            <TabsContent value="matches">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Matches</CardTitle>
                    <CardDescription>Place your bets on upcoming fixtures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {league.upcomingMatches.map((match) => (
                      <div 
                        key={match.id} 
                        className="mb-6 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8">
                              <Image
                                src={match.homeTeam.logo || '/team.png'}
                                alt={match.homeTeam.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="font-medium">{match.homeTeam.name}</span>
                          </div>
                          <div className="text-center">
                            <Badge variant="outline" className="px-3 py-1.5">VS</Badge>
                            <div className="text-sm text-muted-foreground mt-1">
                              {match.date} • {match.time}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{match.awayTeam.name}</span>
                            <div className="relative h-8 w-8">
                              <Image
                                src={match.awayTeam.logo || '/team.png'}
                                alt={match.awayTeam.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <Button
                            variant={selectedBets[match.id] === 'home' ? "default" : "outline"}
                            className="flex flex-col items-center py-10"
                            onClick={() => handleBetSelection(match.id, 'home')}
                          >
                            <span>Home Win</span>
                            <span className="text-lg font-bold">{match.odds.home.toFixed(2)}</span>
                          </Button>
                          <Button
                            variant={selectedBets[match.id] === 'draw' ? "default" : "outline"}
                            className="flex flex-col items-center py-10"
                            onClick={() => handleBetSelection(match.id, 'draw')}
                          >
                            <span>Draw</span>
                            <span className="text-lg font-bold">{match.odds.draw.toFixed(2)}</span>
                          </Button>
                          <Button
                            variant={selectedBets[match.id] === 'away' ? "default" : "outline"}
                            className="flex flex-col items-center py-10"
                            onClick={() => handleBetSelection(match.id, 'away')}
                          >
                            <span>Away Win</span>
                            <span className="text-lg font-bold">{match.odds.away.toFixed(2)}</span>
                          </Button>
                        </div>

                        <div className="flex justify-end mt-4">
                          <Button 
                            size="sm" 
                            disabled={!selectedBets[match.id]}
                            onClick={() => addToBetSlip(match.id)}
                          >
                            Add to Bet Slip
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Results</CardTitle>
                    <CardDescription>Latest match results from this league</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {league.recentMatches?.map((match) => (
                      <div 
                        key={match.id} 
                        className="mb-4 p-4 border rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8">
                              <Image
                                src={match.homeTeam.logo || '/placeholder-team.png'}
                                alt={match.homeTeam.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <span className="font-medium">{match.homeTeam.name}</span>
                          </div>
                          <div className="text-center">
                            <div className="font-bold">
                              {Math.floor(Math.random() * 4)} - {Math.floor(Math.random() * 3)}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {match.date}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{match.awayTeam.name}</span>
                            <div className="relative h-8 w-8">
                              <Image
                                src={match.awayTeam.logo || '/placeholder-team.png'}
                                alt={match.awayTeam.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="standings">
              <Card>
                <CardHeader>
                  <CardTitle>League Table</CardTitle>
                  <CardDescription>Current standings for the {league.season} season</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-4 text-left">Pos</th>
                          <th className="py-2 px-4 text-left">Team</th>
                          <th className="py-2 px-4 text-center">P</th>
                          <th className="py-2 px-4 text-center">W</th>
                          <th className="py-2 px-4 text-center">D</th>
                          <th className="py-2 px-4 text-center">L</th>
                          <th className="py-2 px-4 text-center">Pts</th>
                        </tr>
                      </thead>
                      <tbody>
                        {league.teams.slice(0, 20).map((team) => (
                          <tr key={team.id} className="border-b hover:bg-accent/50 transition-colors">
                            <td className="py-2 px-4">{team.position}</td>
                            <td className="py-2 px-4">
                              <div className="flex items-center gap-2">
                                <div className="relative h-6 w-6">
                                  <Image
                                    src={team.logo || '/placeholder-team.png'}
                                    alt={team.name}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                                <Link href={`/teams/${team.id}`} className="hover:underline">
                                  {team.name}
                                </Link>
                              </div>
                            </td>
                            <td className="py-2 px-4 text-center">{team.played}</td>
                            <td className="py-2 px-4 text-center">{team.won}</td>
                            <td className="py-2 px-4 text-center">{team.drawn}</td>
                            <td className="py-2 px-4 text-center">{team.lost}</td>
                            <td className="py-2 px-4 text-center font-bold">{team.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teams">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {league.teams.map((team) => (
                  <Link 
                    key={team.id}
                    href={`/teams/${team.id}`}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                      <CardHeader className="flex flex-row items-center gap-3">
                        <div className="relative h-12 w-12">
                          <Image
                            src={team.logo || '/placeholder-team.png'}
                            alt={team.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{team.name}</CardTitle>
                          <CardDescription>Position: {team.position}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div>
                            <p className="text-muted-foreground text-sm">Won</p>
                            <p className="font-bold">{team.won}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Drawn</p>
                            <p className="font-bold">{team.drawn}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground text-sm">Lost</p>
                            <p className="font-bold">{team.lost}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Bet Slip Panel */}
        <div className="w-full md:w-1/3" ref={betSlipRef}>
          <Card>
            <CardHeader>
              <CardTitle>Bet Slip</CardTitle>
            </CardHeader>
            <CardContent>
              {betSlip.length === 0 ? (
                <p className="text-muted-foreground">No bets selected.</p>
              ) : (
                <ul className="space-y-2">
                  {betSlip.map((bet, index) => (
                    <li key={`${bet.matchId}-${index}`} className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">
                        {bet.betType} bet on match <strong>{bet.matchId}</strong> @ {bet.odds.toFixed(2)}
                      </span>
                      <Button className="p-4" variant="destructive" onClick={() => removeFromBetSlip(bet.matchId)}>
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
            {betSlip.length > 0 && (
              <CardFooter>
                <Button variant="default" onClick={() => setBetSlip([])}>
                  Clear Bet Slip
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

function LeaguePageSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Skeleton className="h-16 w-16 rounded" />
        <div>
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      <div className="mb-6">
        <Skeleton className="h-10 w-full max-w-md mb-6" />
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-48 mb-2" />
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          <CardContent>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="mb-6 p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-6 w-28" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-6 w-28" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                    <Skeleton className="h-14 w-full" />
                  </div>
                </div>
              ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}