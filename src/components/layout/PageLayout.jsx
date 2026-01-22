import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function PageLayout({ children }) {
  return (
    <div className="flex h-full w-full">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
