import {
    FiGrid, FiBox, FiAlertTriangle, FiTool, FiFileText, FiUsers, FiLogOut, FiChevronDown
} from "react-icons/fi"
import vajraLogo from "../../assets/images/vajra.png";

export default function Sidebar() {
    return (
        <aside className="w-64 min-w-64 bg-[#1B2535] text-gray-200 flex flex-col">
            <div className="p-6" id="title">
                <img
                    src={vajraLogo}
                    alt="Vajra"
                    className="h-8 w-auto"
                />
            </div>


            <nav className="flex-1 px-4 space-y-2">
                <MenuItem icon={<FiGrid />} label="Dashboard" active />
                <MenuItem icon={<FiBox />} label="Assets" hasDropdown />
                <MenuItem icon={<FiAlertTriangle />} label="Incidents" />
                <MenuItem icon={<FiTool />} label="Services" />
                <MenuItem icon={<FiFileText />} label="Reports" hasDropdown />
                <MenuItem icon={<FiUsers />} label="Users" hasDropdown />
            </nav>

            <div className="p-4 space-y-3">
                <button className="w-full border border-gray-600 rounded-[30px] cursor-pointer py-2 text-sm">
                    Contact us
                </button>
                <button className="w-full border border-gray-600 rounded-[30px] cursor-pointer py-2 flex items-center justify-center gap-2 text-sm">
                    <FiLogOut /> Log Out
                </button>
            </div>
        </aside>
    )
}

function MenuItem({ icon, label, active, hasDropdown }) {
    return (
        <div
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
        ${active ? "bg-[#1E293B] text-white" : "hover:bg-[#1E293B]"}`}
        >
            {icon}
            <span className="flex-1">{label}</span>
            {hasDropdown && <FiChevronDown className="text-sm" />}
        </div>
    )
}