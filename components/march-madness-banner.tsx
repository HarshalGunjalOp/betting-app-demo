import { Button } from "@/components/ui/button"

export default function MarchMadnessBanner() {
  return (
    <div className="bg-[#1c2a38] rounded-lg overflow-hidden mb-8 relative">
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-white text-5xl md:text-6xl font-bold mb-4">
            <span className="block">GET INTO</span>
            <span className="text-[#3b82f6]">THE MADNESS</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white">March Madness Picks</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              March Madness Promos
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative h-48 md:h-auto">
          <img
            src="/placeholder.svg?height=300&width=500"
            alt="March Madness"
            className="absolute inset-0 w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

