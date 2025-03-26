"use client"

import Link from "next/link"
import { nflData } from "@/lib/nfl-data"
import { useState } from "react"
import SportsMenuDropdown from "./sports-menu-dropdown"

export default function NFLOdds() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sportDropdownOpen, setSportDropdownOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b">
        <div className="flex space-x-4">
          <div className="relative">
            <button
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary flex items-center"
              onClick={() => setSportDropdownOpen(!sportDropdownOpen)}
            >
              NFL
              <svg className="h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {sportDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-1">
                  <li>
                    <Link href="/nfl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      NFL
                    </Link>
                  </li>
                  <li>
                    <Link href="/ncaaf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      NCAAF
                    </Link>
                  </li>
                  <li>
                    <Link href="/nba" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      NBA
                    </Link>
                  </li>
                  <li>
                    <Link href="/ncaab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      NCAAB
                    </Link>
                  </li>
                  <li>
                    <Link href="/mlb" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      MLB
                    </Link>
                  </li>
                  <li>
                    <Link href="/nhl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      NHL
                    </Link>
                  </li>
                  <li>
                    <Link href="/soccer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Soccer
                    </Link>
                  </li>
                  <li>
                    <Link href="/wnba" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      WNBA
                    </Link>
                  </li>
                  <li>
                    <Link href="/cfl" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      CFL
                    </Link>
                  </li>
                  <li>
                    <Link href="/pga" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      PGA
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option>Decimal</option>
              <option>American</option>
              <option>Fractional</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
              <option>Super Bowl LX</option>
              <option>Week 1</option>
              <option>Week 2</option>
              <option>Week 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center relative">
          <button className="flex items-center text-sm" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-[#ff5722] mr-1"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            Odds help
          </button>

          <SportsMenuDropdown isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Teams
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Open
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <img
                src="/bet365.svg"
                alt="bet365"
                className="h-5 mx-auto"
                width={80}
                height={20}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <img
                src="/williamhill.svg"
                alt="williamhill"
                className="h-5 mx-auto"
                width={80}
                height={20}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <img
                src="/betway.svg"
                alt="betway"
                className="h-5 mx-auto"
                width={80}
                height={20}
              />
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {nflData.teams.map((team) => (
            <tr key={team.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 mr-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">{team.abbr.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">{team.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.open}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{team.bet365}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{team.williamHill}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center">{team.betway}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 flex justify-end items-center border-t">
        <div className="flex items-center">
          <img
            src="/placeholder.svg?height=20&width=80&text=BetSlip"
            alt="BetSlip"
            className="h-5 mr-2"
            width={80}
            height={20}
          />
          <div className="w-6 h-6 rounded-full bg-[#ff5722] text-white flex items-center justify-center text-xs">0</div>
        </div>
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

