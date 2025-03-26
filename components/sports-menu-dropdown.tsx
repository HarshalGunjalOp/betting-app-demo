"use client"

import Link from "next/link"

export default function SportsMenuDropdown({ isOpen, onClose }) {
  return (
    <div className={`absolute top-full right-0 w-64 bg-white shadow-lg z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="p-2">
        <ul className="space-y-1">
          <li>
            <Link
              href="/nfl/standings"
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm"
              onClick={onClose}
            >
              Standings
            </Link>
          </li>
          <li>
            <Link
              href="/nfl/statistics"
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm"
              onClick={onClose}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              href="/nfl/weather"
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm"
              onClick={onClose}
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              href="/nfl/league-trends"
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm"
              onClick={onClose}
            >
              League Trends
            </Link>
          </li>
          <li>
            <Link
              href="/nfl/print-sheets"
              className="block py-2 px-3 hover:bg-gray-100 rounded-md text-sm"
              onClick={onClose}
            >
              Print Sheets
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

