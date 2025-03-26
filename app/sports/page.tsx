import Link from "next/link"
import { allSportsData } from "@/lib/all-sports-data"

export default function SportsPage() {
  const popularSports = allSportsData.filter((sport) => sport.popular)
  const otherSports = allSportsData.filter((sport) => !sport.popular)

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Sports</h1>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Popular Sports</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularSports.map((sport) => (
              <Link
                key={sport.id}
                href={`/${sport.slug}`}
                className="bg-white rounded-lg shadow p-4 flex items-center hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">{sport.icon}</span>
                </div>
                <span className="font-medium">{sport.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">All Sports</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherSports.map((sport) => (
              <Link
                key={sport.id}
                href={`/${sport.slug}`}
                className="bg-white rounded-lg shadow p-4 flex items-center hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">{sport.icon}</span>
                </div>
                <span className="font-medium">{sport.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

