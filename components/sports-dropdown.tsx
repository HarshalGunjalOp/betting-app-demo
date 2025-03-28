"use client"

import Link from "next/link"

export default function SportsDropdown({ isOpen, onClose }) {
  return (
    <div className={`absolute top-full left-0 w-full bg-white text-black shadow-lg z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="container mx-auto grid grid-cols-3 gap-4 p-4">
        <div className="col-span-1 border-r">
          <SportsList onClose={onClose} />
        </div>
        <div className="col-span-1 border-r">
          <SectionsList onClose={onClose} />
        </div>
        <div className="col-span-1">
          <FeaturesList onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

function SportsList({ onClose }) {
  const sports = [
    { id: "nfl", name: "NFL", icon: "🏈" },
    { id: "ncaaf", name: "NCAAF", icon: "🏈" },
    { id: "nba", name: "NBA", icon: "🏀" },
    { id: "ncaab", name: "NCAAB", icon: "🏀" },
    { id: "mlb", name: "MLB", icon: "⚾" },
    { id: "nhl", name: "NHL", icon: "🏒" },
    { id: "soccer", name: "Soccer", icon: "⚽" },
    { id: "ufc", name: "UFC", icon: "🥊" },
    { id: "wnba", name: "WNBA", icon: "🏀" },
    { id: "cfl", name: "CFL", icon: "🏈" },
    { id: "golf", name: "Golf", icon: "🏌️" },
  ]

  return (
    <ul className="space-y-2">
      {sports.map((sport) => (
        <li key={sport.id}>
          <Link
            href={`/${sport.id}`}
            className="flex items-center py-2 px-3 hover:bg-gray-100 rounded-md"
            onClick={onClose}
          >
            <span className="w-6 h-6 flex items-center justify-center mr-3 text-lg">{sport.icon}</span>
            <span>{sport.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-auto">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SectionsList({ onClose }) {
  const sections = [
    { id: "home", name: "NFL Home" },
    { id: "scores", name: "Scores & Matchups" },
    { id: "odds", name: "Odds" },
    { id: "projections", name: "Prop Projections" },
    { id: "super-bowl-odds", name: "Super Bowl Odds" },
    { id: "futures", name: "Futures" },
    { id: "free-picks", name: "Free Picks" },
    { id: "news", name: "News & Analysis" },
    { id: "contest", name: "NFL Contest" },
    { id: "super-bowl", name: "Super Bowl" },
    { id: "injuries", name: "Injuries" },
  ]

  return (
    <ul className="space-y-2">
      {sections.map((section) => (
        <li key={section.id}>
          <Link href={`/nfl/${section.id}`} className="py-2 px-3 hover:bg-gray-100 rounded-md block" onClick={onClose}>
            {section.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function FeaturesList({ onClose }) {
  const features = [
    { id: "teams", name: "Teams" },
    { id: "players", name: "Players" },
    { id: "standings", name: "Standings" },
    { id: "statistics", name: "Statistics" },
    { id: "weather", name: "Weather" },
    { id: "league-trends", name: "League Trends" },
    { id: "print-sheets", name: "Print Sheets" },
  ]

  return (
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature.id}>
          <Link href={`/nfl/${feature.id}`} className="py-2 px-3 hover:bg-gray-100 rounded-md block" onClick={onClose}>
            {feature.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

