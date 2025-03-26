import Link from "next/link"

export default function PopularContent() {
  const articles = [
    {
      id: 1,
      title: "Use Caesars Sportsbook Promo Code 'COVERSBONUSDYW' for 10 Bet Boosts Back on Thunder vs Kings",
      image: "/placeholder.svg?height=80&width=80",
      author: "Peter Clarke",
      date: "Mar 25, 2025",
    },
    {
      id: 2,
      title: "Enter bet365 Bonus Code 'COVERS' for $150 Bonus Bets Back On Your First $5 Bet on Thunder vs Kings",
      image: "/placeholder.svg?height=80&width=80",
      author: "Peter Clarke",
      date: "Mar 25, 2025",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Popular Content</h2>
      </div>

      <div className="divide-y">
        {articles.map((article) => (
          <div key={article.id} className="p-4 flex">
            <div className="flex-shrink-0 mr-3">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-20 h-20 object-cover rounded"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h3 className="font-medium text-sm mb-2">
                <Link href="#" className="hover:text-[#ff5722]">
                  {article.title}
                </Link>
              </h3>
              <div className="text-xs text-gray-500">
                {article.author} | {article.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

