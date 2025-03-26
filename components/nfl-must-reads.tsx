import Link from "next/link"

export default function NFLMustReads() {
  const articles = [
    {
      id: 1,
      title: "2025-26 NFL Defensive Player of the Year Award Odds: Garrett Favored After Browns Extension",
      subtitle: "Cleveland's All-Pro pass rusher spearheads the list.",
      image: "/placeholder.svg?height=100&width=150",
      date: "Mar 24, 2025",
      time: "12:08 PM ET",
    },
    {
      id: 2,
      title: "2025-26 NFL Offensive Player of the Year Award Odds: Can Barkley Deliver an Encore?",
      subtitle: "Barkley favored to repeat.",
      image: "/placeholder.svg?height=100&width=150",
      date: "Mar 24, 2025",
      time: "12:03 PM ET",
    },
    {
      id: 3,
      title: "NFL Schedule Release Date: When Will The 2025 Slate Be Revealed?",
      subtitle: "The NFL's annual schedule release has become a huge event.",
      image: "/placeholder.svg?height=100&width=150",
      date: "Mar 18, 2025",
      time: "10:07 AM ET",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">NFL Must Reads</h2>
      </div>

      <div className="divide-y">
        {articles.map((article) => (
          <div key={article.id} className="p-4 flex">
            <div className="flex-shrink-0 mr-4">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-[100px] h-[100px] object-cover rounded"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3 className="font-bold mb-1">
                <Link href="#" className="hover:text-[#ff5722]">
                  {article.title}
                </Link>
              </h3>
              <p className="text-sm text-gray-700 mb-2">{article.subtitle}</p>
              <div className="text-xs text-gray-500">
                {article.date} • {article.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

