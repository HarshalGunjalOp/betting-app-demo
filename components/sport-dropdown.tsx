"use client"

import Link from "next/link"
import { 
  Trophy, 
  Calendar, 
  TrendingUp, 
  Star, 
  BarChart, 
  Zap,
  Flame
} from "lucide-react"
import { ReactNode } from "react"

interface SportDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SportItem {
  id: string;
  name: string;
  icon: string;
}

interface LeagueItem {
  id: string;
  name: string;
  category: string;
}

interface EventItem {
  id: string;
  name: string;
  icon: ReactNode;
  date: string;
  trending?: boolean;
}

interface FeatureItem {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
}

export default function SportsDropdown({ isOpen, onClose }: SportDropdownProps) {
  return (
    <div className={`absolute top-[50px] left-[-400px] w-[800px] bg-white text-black shadow-lg z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="max-w-screen min-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <div className="col-span-1 border-r pr-6">
          <h3 className="font-bold text-[#ff5722] mb-4">Major Sports</h3>
          <MajorSportsList onClose={onClose} />
        </div>
        <div className="col-span-1 border-r pr-6">
          <h3 className="font-bold text-[#ff5722] mb-4">Leagues & Competitions</h3>
          <LeaguesList onClose={onClose} />
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-[#ff5722] mb-4">Featured</h3>
          <FeaturedList onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

function MajorSportsList({ onClose }: { onClose: () => void }) {
  const sports: SportItem[] = [
    { id: "cricket", name: "Cricket", icon: "🏏" },
    { id: "nfl", name: "NFL Football", icon: "🏈" },
    { id: "nba", name: "NBA Basketball", icon: "🏀" },
    { id: "mlb", name: "MLB Baseball", icon: "⚾" },
    { id: "nhl", name: "NHL Hockey", icon: "🏒" },
    { id: "soccer", name: "Soccer", icon: "⚽" },
    { id: "ncaaf", name: "College Football", icon: "🏈" },
    { id: "ncaab", name: "College Basketball", icon: "🏀" },
    { id: "ufc-mma", name: "UFC/MMA", icon: "🥊" },
    { id: "golf", name: "Golf", icon: "🏌️" },
    { id: "tennis", name: "Tennis", icon: "🎾" },
  ]

  return (
    <ul className="space-y-2">
      {sports.map((sport) => (
        <li key={sport.id}>
          <Link
            href={`/sports/${sport.id}`}
            className="flex items-center py-2 px-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={onClose}
          >
            <span className="w-6 h-6 flex items-center justify-center mr-3 text-lg">{sport.icon}</span>
            <span>{sport.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto text-gray-400">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
      ))}
      <li className="pt-2 mt-2 border-t">
        <Link
          href="/sports/all"
          className="flex items-center py-2 px-2 text-[#ff5722] hover:bg-gray-100 rounded-md transition-colors font-medium"
          onClick={onClose}
        >
          All Sports
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>
    </ul>
  )
}

function LeaguesList({ onClose }: { onClose: () => void }) {
  const leagues: LeagueItem[] = [
    { id: "cricket", name: "IPL", category: "Cricket" },
    { id: "nfl", name: "NFL", category: "Football" },
    { id: "ncaaf", name: "NCAA Football", category: "Football" },
    { id: "nba", name: "NBA", category: "Basketball" },
    { id: "ncaab", name: "NCAA Basketball", category: "Basketball" },
    { id: "mlb", name: "MLB", category: "Baseball" },
    { id: "nhl", name: "NHL", category: "Hockey" },
    { id: "premier-league", name: "Premier League", category: "Soccer" },
    { id: "la-liga", name: "La Liga", category: "Soccer" },
    { id: "champions-league", name: "Champions League", category: "Soccer" },
  ]

  // Group leagues by category
  const groupedLeagues = leagues.reduce<Record<string, LeagueItem[]>>((acc, league) => {
    if (!acc[league.category]) {
      acc[league.category] = [];
    }
    acc[league.category].push(league);
    return acc;
  }, {});

  return (
    <div className="space-y-4">
      {Object.entries(groupedLeagues).map(([category, leagueList]) => (
        <div key={category}>
          <h4 className="text-sm font-medium text-gray-500 mb-1">{category}</h4>
          <ul className="space-y-1">
            {leagueList.map((league) => (
              <li key={league.id}>
                <Link 
                  href={`/leagues/${league.id}`} 
                  className="py-1.5 px-2 hover:bg-gray-100 rounded-md block text-sm transition-colors"
                  onClick={onClose}
                >
                  {league.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function FeaturedList({ onClose }: { onClose: () => void }) {
  const specialEvents: EventItem[] = [
    { 
      id: "T20-world-cup",
      name: "T20 World Cup",
      icon: <Trophy className="h-5 w-5 text-[#ff5722]" />,
      date: "Oct 1 - Nov 14",
      trending: true
    },
    {
      id: "march-madness", 
      name: "March Madness", 
      icon: <Trophy className="h-5 w-5 text-[#ff5722]" />,
      date: "Mar 15 - Apr 4"
    },
    { 
      id: "super-bowl",  
      name: "Super Bowl",  
      icon: <Trophy className="h-5 w-5 text-[#ff5722]" />, 
      date: "Feb 2",
    },
    { 
      id: "nba-playoffs",  
      name: "NBA Playoffs",  
      icon: <Star className="h-5 w-5 text-[#ff5722]" />, 
      trending: false,
      date: "Apr 15 - Jun 15"
    },
  ];

  const features: FeatureItem[] = [
    { 
      id: "betting", 
      name: "Live Betting", 
      icon: <Zap className="h-5 w-5 text-green-500" />,
      description: "Bet on games in progress"
    },
   
    { 
      id: "picks", 
      name: "Expert Picks", 
      icon: <Star className="h-5 w-5 text-yellow-500" />,
      description: "See our analysts' recommendations"
    },
    
  ];

  return (
    <div>
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-3">Special Events</h4>
        <ul className="space-y-2">
          {specialEvents.map((event) => (
            <li key={event.id}>
              <Link
                href={`/events/${event.id}`}
                className="flex items-center py-2 px-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                {event.icon}
                <div className="ml-3">
                  <div className="flex items-center">
                    <span>{event.name}</span>
                    {event.trending && (
                      <span className="ml-2 text-xs bg-red-100 text-red-800 px-1.5 py-0.5 rounded-full">Hot</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {event.date}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-3">Betting Tools</h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature.id}>
              <Link
                href={`/${feature.id}`}
                className="flex items-center py-2 px-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={onClose}
              >
                {feature.icon}
                <div className="ml-3">
                  <div>{feature.name}</div>
                  <span className="text-xs text-gray-500">{feature.description}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
