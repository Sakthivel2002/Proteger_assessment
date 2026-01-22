import React from "react";

const data = [
  {
    label: "Neonatal intensive care\nunit",
    open: 20,
    closed: 7,
  },
  {
    label: "Radiology",
    open: 6,
    closed: 8,
  },
  {
    label: "Nursing Department",
    open: 10,
    closed: 9,
  },
  {
    label: "Trauma and Emergency\ncare",
    open: 6,
    closed: 4,
  },
  {
    label: "Oncology",
    open: 2,
    closed: 3,
  },
];

const MAX_VALUE = 30;

export default function WorkOrder() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-full mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-bold text-gray-800">
          Work Order Reported – 12
        </h2>

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#243E8F]" />
            Open
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#AEBBFF]" />
            Closed
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        {/* X-axis grid */}
        <div className="absolute left-[220px] right-0 top-0 bottom-8 flex justify-between">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-px bg-gray-100 h-full"
            />
          ))}
        </div>

        {/* Bars */}
        <div className="space-y-6">
          {data.map((item, idx) => {
            const openWidth = (item.open / MAX_VALUE) * 100;
            const closedWidth = (item.closed / MAX_VALUE) * 100;

            return (
              <div key={idx} className="flex items-center">
                {/* Y-axis label */}
                <div className="w-[220px] pr-4 text-xs text-gray-700 whitespace-pre-line">
                  {item.label}
                </div>

                {/* Bar container */}
                <div className="flex-1 h-6 flex rounded-md overflow-hidden">
                  {/* Open */}
                  <div
                    className="bg-[#243E8F] flex items-center justify-end pr-2 text-white text-xs"
                    style={{ width: `${openWidth}%` }}
                  >
                    {item.open}
                  </div>

                  {/* Closed */}
                  <div
                    className="bg-[#AEBBFF] flex items-center justify-end pr-2 text-[#243E8F] text-xs"
                    style={{ width: `${closedWidth}%` }}
                  >
                    {item.closed}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-6 pl-[220px]">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i}>{i * 2}</span>
          ))}
        </div>

        <div className="text-center text-xs font-bold text-gray-600 mt-2">
          Total No.of.Work order
        </div>
      </div>
    </div>
  );
}
