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
    { id: "cricket", name: "Cricket", icon: "🏏" },
    { id: "football", name: "Football", icon: "⚽" },
    { id: "tennis", name: "Tennis", icon: "🎾" },
    { id: "tabletennis", name: "Table Tennis", icon: "🏓" },
    { id: "boxing", name: "Boxing", icon: "🥊" },
    { id: "mma", name: "Mixed Martial Arts", icon: "🤼" },
    { id: "horseracing", name: "Horse Racing", icon: "🏇" },
    { id: "greyhoundracing", name: "Greyhound Racing", icon: "🐕" },
    { id: "esoccer", name: "Esoccer", icon: "🎮⚽" },
    { id: "basketball", name: "Basketball", icon: "🏀" },
    { id: "badminton", name: "Badminton", icon: "🏸" },
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
    { id: "home", name: "Home" },
    { id: "lottery", name: "Lottery" },
    { id: "cricket", name: "Cricket" },
    { id: "tennis", name: "Tennis" },
    { id: "football", name: "Football" },
    { id: "table-tennis", name: "Table Tennis" },
    { id: "baccarat", name: "Baccarat" },
    { id: "32-cards", name: "32 Cards" },
    { id: "teenpatti", name: "Teenpatti" },
    { id: "poker", name: "Poker" },
    { id: "lucky-7", name: "Lucky 7" },
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
    { id: "racing-sports", name: "Racing Sports" },
    { id: "horse-racing", name: "Horse Racing" },
    { id: "greyhound-racing", name: "Greyhound Racing" },
    { id: "others", name: "Others" },
    { id: "our-casino", name: "Our Casino" },
    { id: "our-virt", name: "Our Virt" },
    { id: "live-casino", name: "Live Casino" },
    { id: "slot-game", name: "Slot Game" },
    { id: "fantasy-game", name: "Fantasy Game" },
    { id: "all-sports", name: "All Sports" },
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

