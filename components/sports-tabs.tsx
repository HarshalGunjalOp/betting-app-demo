"use client"
import { useState } from "react"

export default function SportsTabs() {
  const [activeTab, setActiveTab] = useState("featured")

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <TabButton
        active={activeTab === "featured"}
        onClick={() => setActiveTab("featured")}
        icon={<CircleIcon className="w-4 h-4" />}
      >
        Featured
      </TabButton>
      <TabButton
        active={activeTab === "ncaab"}
        onClick={() => setActiveTab("ncaab")}
        icon={<BasketballIcon className="w-4 h-4" />}
      >
        NCAAB
      </TabButton>
      <TabButton
        active={activeTab === "nba"}
        onClick={() => setActiveTab("nba")}
        icon={<BasketballIcon className="w-4 h-4" />}
      >
        NBA
      </TabButton>
      <TabButton
        active={activeTab === "mlb"}
        onClick={() => setActiveTab("mlb")}
        icon={<BaseballIcon className="w-4 h-4" />}
      >
        MLB
      </TabButton>
      <TabButton
        active={activeTab === "nhl"}
        onClick={() => setActiveTab("nhl")}
        icon={<HockeyIcon className="w-4 h-4" />}
      >
        NHL
      </TabButton>
    </div>
  )
}

function TabButton({ children, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium ${
        active ? "bg-[#ff5722] text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {children}
    </button>
  )
}

function CircleIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}

function BasketballIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}

function BaseballIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}

function HockeyIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  )
}

