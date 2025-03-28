import { Button } from "@/components/ui/button"

export default function MarchMadnessBanner() {
  return (
    <div className="bg-[#1c2a38] rounded-lg overflow-hidden mb-8 relative">
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:w-1/2 flex flex-col justify-center z-10">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-4">
            <span className="block">GET INTO</span>
            <span className="text-[#3b82f6]">THE MADNESS</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">March Madness Picks</Button>
            <Button variant="outline" className="border-white text-black hover:bg-slate-300" >
              March Madness Promos
            </Button>
          </div>
        </div>
          <img
            src="/banner.avif"
            alt="March Madness"
            className="absolute right-[-1000px] inset-0 w-full h-full object-cover z-0"
            width={500}
            height={300}
          />
        
      </div>
    </div>
  )
}

