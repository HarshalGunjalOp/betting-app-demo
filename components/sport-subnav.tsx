import Link from "next/link"

export default function SportSubnav({sport}: { sport: string }) {
  return (
    <div className="bg-white border-b mb-6">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-4 py-2">
          <NavLink href={"/"+sport} active>
            {sport}
          </NavLink>
          <NavLink href="/nfl/scores">Scores & Matchups</NavLink>
          <NavLink href="/nfl/free-picks">Free Picks</NavLink>
          <NavLink href="/nfl/odds">Odds</NavLink>
          <NavLink href="/nfl/projections">Prop Projections</NavLink>
          <NavLink href="/nfl/super-bowl-odds">Super Bowl Odds</NavLink>
          <NavLink href="/nfl/futures">Futures</NavLink>
          <NavLink href="/nfl/news">News & Analysis</NavLink>
          <NavLink href="/nfl/contest">NFL Contest</NavLink>
          <NavLink href="/nfl/super-bowl">Super Bowl</NavLink>
          <NavLink href="/nfl/injuries">Injuries</NavLink>
          <NavLink href="/nfl/teams">Teams</NavLink>
          <NavLink href="/nfl/players">Players</NavLink>
        </div>
      </div>
    </div>
  )
}

function NavLink({ href, children, active = false }) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap px-3 py-2 text-sm font-medium ${
        active ? "text-[#ff5722] border-b-2 border-[#ff5722]" : "text-gray-700 hover:text-[#ff5722]"
      }`}
    >
      {children}
    </Link>
  )
}

