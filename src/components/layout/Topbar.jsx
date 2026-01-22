import { ChevronLeft, ChevronDown, Grid3x3, Bell } from "lucide-react"

export default function Topbar() {
  return (
    <header className="bg-gray-100 px-6 py-3 flex items-center justify-between border-b">
      
      <div className="flex items-center gap-3">
        <button className="text-blue-600 hover:text-blue-700">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-900">
          Reports <span className="text-blue-500 font-normal">/ Bio Medical</span>
        </h1>
      </div>

      <div className="flex items-center gap-3">
        
        <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-sm">
          <div className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-semibold">
            NB
          </div>
          <span className="font-medium text-gray-900">Non Bio Medical</span>
        </div>

        <button className="flex items-center gap-2 bg-white cursor-pointer px-4 py-2 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-50">
          Vijayanagar
          <ChevronDown size={16} />
        </button>

        <button className="w-10 h-10 flex items-center justify-center cursor-pointer bg-white rounded-full border border-gray-300 hover:bg-gray-50">
          <Grid3x3 size={18} />
        </button>

        <button className="w-8 h-8 flex items-center justify-center cursor-pointer bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
          <Bell size={18} strokeWidth={2} className="text-gray-700 fill-gray-700" />
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center cursor-pointer justify-center text-sm font-semibold">
          A
        </div>
      </div>
    </header>
  )
}