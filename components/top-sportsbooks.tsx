import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TopSportsbooks() {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Top-Rated Sportsbooks</h2>
        <Link href="/betting-sites" className="text-sm text-[#ff5722] flex items-center">
          Best betting sites
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((book) => (
          <div key={book} className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold">{book}</span>
              </div>
              <div>
                <h3 className="font-bold">Sportsbook {book}</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white text-sm">Claim</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

