import { Button } from "@/components/ui/button"

export default function TopNFLSportsbooks() {
  const sportsbooks = [
    {
      id: 1,
      name: "bet365",
      logo: "/bet365.svg",
      bonus: "Bonus Available",
      bonusInfo: "i",
    },
    {
      id: 2,
      name: "betway",
      logo: "/betway.svg",
      bonus: "€30 in Free Bets",
      bonusInfo: "i",
    },
    {
      id: 3,
      name: "PINNACLE",
      logo: "/placeholder.svg?height=40&width=100&text=PINNACLE",
      bonus: "Best Odds, High Limits",
      bonusInfo: "i",
    },
    {
      id: 4,
      name: "William Hill",
      logo: "/williamhill.svg",
      bonus: "Bet €10 & Get €30",
      bonusInfo: "i",
    },
    {
      id: 5,
      name: "888",
      logo: "/888sport.svg",
      bonus: "100% Bonus up to €100",
      bonusInfo: "i",
    },
  ]

  return (
    <div className="bg-[#1c2a38] rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Top NFL Sportsbooks</h2>
      </div>

      <div className="divide-y divide-gray-700">
        {sportsbooks.map((book) => (
          <div key={book.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src={book.logo || "/placeholder.svg"} alt={book.name} className="h-8 mr-3" width={100} height={40} />
              <div className="text-sm text-white flex items-center">
                {book.bonus}
                <span className="ml-1 w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-xs">
                  {book.bonusInfo}
                </span>
              </div>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-sm">
              Review
            </Button>
          </div>
        ))}
      </div>

      <div className="p-4 flex justify-center">
        <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">See More</Button>
      </div>
    </div>
  )
}

