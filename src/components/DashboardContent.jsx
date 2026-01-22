import { ChevronLeft, ChevronRight, Calendar, Download } from "lucide-react"
import { useState } from "react"
import WorkOrder from "./cards/WorkOrder";
import IncidentReported from "./cards/IncidentReported";
import IncidentPerDept from "./cards/IncidentPerDept";
import WorkOrderPerDept from "./cards/WorkOrderPerDept";
import vajra from "../../src/assets/images/vajra2.png"


export default function DashboardContent() {
    const [hoveredBar, setHoveredBar] = useState(null);
    const data = [
        { label: "Neonatal intensive care unit", open: 20, closed: 7 },
        { label: "Radiology", open: 6, closed: 8 },
        { label: "Nursing Department", open: 10, closed: 9 },
        { label: "Trauma and Emergency care", open: 6, closed: 4 },
        { label: "Oncology", open: 2, closed: 3 },
    ];
    const MAX = 30;
    const TICKS = Array.from({ length: 16 }, (_, i) => i * 2);

    return (
        <div className="bg-gray-50 min-h-screen p-6 space-y-6">
            
            {/* Header Section */}
            <div className=" bg-gray-50 flex items-center justify-between mb-6">
                <div>
        <img
          src={vajra} 
          alt="Vajra Icon"
          className="w-16 h-auto"
        />
      </div>
                <h1 className="text-2xl font-bold text-gray-900">Monthly Report</h1>

                <div className="flex items-center gap-3">
                    {/* Date Selector */}
                    <div className="flex items-center gap-2 bg-white border border-gray-300  rounded-lg px-4 py-2">
                        <button className="hover:bg-gray-100 rounded p-1 cursor-pointer">
                            <ChevronLeft size={16} />
                        </button>
                        <span className="text-sm font-medium flex items-center cursor-pointer gap-2">
                            June 2025
                            <Calendar size={14} />
                        </span>
                        <button className="hover:bg-gray-100 rounded p-1 cursor-pointer">
                            <ChevronRight size={16} />
                        </button>
                    </div>

                    {/* Download Button */}
                    <button className="flex items-center gap-2 bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                        Download PDF
                        <Download size={16} />
                    </button>
                </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Column */}
                <div className="space-y-6">

                    {/* Institute Card */}
                    <div
                        className="bg-[#022A66] text-white rounded-2xl px-6 py-7"
                        style={{ height: "300px" }}
                    >
                        {/* Institute Header */}
                        <div className="flex items-center justify-around gap-4 mt-15 mb-8">
                            {/* Medical Plus Icon */}
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 5v14" />
                                    <path d="M5 12h14" />
                                </svg>
                            </div>

                            {/* Institute Name */}
                            <div className="leading-snug">
                                <div className="text-base font-semibold">
                                    Sri siddhartha institute
                                </div>
                                <div className="text-base font-semibold opacity-90">
                                    of medical science
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-around gap-4 mr-17">
                            <svg
                                className="w-10 h-10 "
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 21s7-7.75 7-13a7 7 0 10-14 0c0 5.25 7 13 7 13z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            <span className="text-base font-medium">Vijayanagar</span>
                        </div>
                    </div>


                    {/* Total Asset Card */}
                    <div className="bg-[#F44771] text-white rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-8 -mt-8"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-4 -mb-4"></div>
                        <div className="relative">
                            <h3 className="text-sm font-medium mb-2 opacity-90">Total Asset</h3>
                            <p className="text-4xl font-bold">200</p>
                        </div>
                    </div>


                </div>

                {/* Donut Chart Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm h-[300px]" >
                    <div className="flex items-center gap-8 ">

                        {/* Donut Chart */}
                        <div className="relative group cursor-pointer">
                            <svg viewBox="0 0 200 200" className="w-56 h-56">
                                {/* Working Assets */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="60"
                                    fill="none"
                                    stroke="#1E3A8A"
                                    strokeWidth="40"
                                    strokeDasharray="251 377"
                                    transform="rotate(-90 100 100)"
                                />

                                {/* Not Working Assets */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="60"
                                    fill="none"
                                    stroke="#C26785"
                                    strokeWidth="40"
                                    strokeDasharray="94 377"
                                    strokeDashoffset="-251"
                                    transform="rotate(-90 100 100)"
                                />

                                {/* Discarded */}
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="60"
                                    fill="none"
                                    stroke="#56ABF8"
                                    strokeWidth="40"
                                    strokeDasharray="32 377"
                                    strokeDashoffset="-345"
                                    transform="rotate(-90 100 100)"
                                />
                            </svg>

                            {/* Center Hover Popup */}
                            <div
                                className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition
                        pointer-events-none"
                            >
                                <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 shadow">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                    Not Working Assets · 7
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#1E3A8A] rounded-full"></span>
                                <span>Working Assets</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#C26785] rounded-full"></span>
                                <span>Not Working Assets</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[#56ABF8] rounded-full"></span>
                                <span>Discarded</span>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Right Column - Bar Chart and Cards */}
                <div className="space-y-6 ">

                    {/* Bar Chart Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm h-[300px] relative">

                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div />

                            {/* Legend + Tooltip */}
                            <div className="relative">
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#1E3A8A] rounded-sm"></div>
                                        <span>Open</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#56ABF8] rounded-sm"></div>
                                        <span>Closed</span>
                                    </div>
                                </div>

                                {/* Tooltip */}
                                {hoveredBar && (
                                    <div className="absolute right-0 mt-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs">
                                        <div className="font-medium">{hoveredBar.label}</div>
                                        <div className="text-blue-400">
                                            Open – {hoveredBar.open}
                                        </div>
                                        <div>
                                            Closed – {hoveredBar.closed}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bars */}
                        <div className="flex items-end justify-around h-40 gap-6">

                            {/* Bar 1 */}
                            <div
                                className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
                                onMouseEnter={() =>
                                    setHoveredBar({ label: "Bar 1", open: 35, closed: 20 })
                                }
                                onMouseLeave={() => setHoveredBar(null)}
                            >
                                <div className="w-full flex flex-col gap-1">
                                    <div className="w-full bg-[#56ABF8] rounded-t h-[60px]" />
                                    <div className="w-full bg-[#1E3A8A] rounded-b h-[40px]" />
                                </div>
                                <span className="text-xs font-medium">Incidents</span>
                            </div>

                            {/* Bar 2 */}
                            <div
                                className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
                                onMouseEnter={() =>
                                    setHoveredBar({ label: "Bar 2", open: 5, closed: 0 })
                                }
                                onMouseLeave={() => setHoveredBar(null)}
                            >
                                <div className="w-full flex flex-col gap-1">
                                    <div className="w-full bg-[#56ABF8] rounded-t h-[10px]" />
                                    <div className="w-full bg-[#1E3A8A] rounded-b h-[0px]" />
                                </div>
                                <span className="text-xs font-medium">Work Order</span>
                            </div>

                            {/* Bar 3 */}
                            <div
                                className="flex flex-col items-center gap-2 flex-1 cursor-pointer"
                                onMouseEnter={() =>
                                    setHoveredBar({ label: "Bar 3", open: 10, closed: 7 })
                                }
                                onMouseLeave={() => setHoveredBar(null)}
                            >
                                <div className="w-full flex flex-col gap-1">
                                    <div className="w-full bg-[#56ABF8] rounded-t h-[30px]" />
                                    <div className="w-full bg-[#1E3A8A] rounded-b h-[20px]" />
                                </div>
                                <span className="text-xs font-medium">Checkouts</span>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            {/* Summary Cards Row */}
            <div className="flex flex-col lg:flex-row gap-4 w-full mt-4">

                {/* Check outs */}
                <div className="flex-[1_1_0%] min-w-0 w-full bg-white rounded-xl shadow-sm overflow-hidden ">
                    <div className="bg-blue-100 px-4 py-2 font-bold text-sm">
                        Check outs
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="font-bold">Checked In</span>
                            <span>0</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Checked Out</span>
                            <span>25</span>
                        </div>
                    </div>
                </div>

                {/* Incidents */}
                <div className="flex-[1_1_0%] min-w-0 w-full bg-white rounded-xl shadow-sm overflow-hidden ">
                    <div className="bg-blue-100 px-4 py-2 font-bold text-sm">
                        Incidents
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="font-bold">Incidents</span>
                            <span>22 Reported</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Total Downtime</span>
                            <span>12 mins 10 sec</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Closed</span>
                            <span>19</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Open</span>
                            <span>3</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Budget spent</span>
                            <span className="text-green-600 font-semibold">₹ 3,00,000</span>
                        </div>
                    </div>
                </div>

                {/* Work Order */}
                <div className="flex-[1_1_0%] min-w-0 w-full bg-white rounded-xl shadow-sm overflow-hidden ">
                    <div className="bg-blue-100 px-4 py-2 font-bold text-sm">
                        Work Order
                    </div>
                    <div className="p-4 space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="font-bold">Work order</span>
                            <span>17 requested</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Closed</span>
                            <span>14</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Open</span>
                            <span>3</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Budget spent</span>
                            <span className="text-green-600 font-semibold">₹ 3,00,000</span>
                        </div>
                    </div>
                </div>

            </div>



            <IncidentReported />
            <WorkOrder />
            <IncidentPerDept />
            <WorkOrderPerDept />


        </div>

    )
}