import { Outlet } from 'react-router-dom'
import SideNavBar from './SideNavBar'
import TopAppBar from './TopAppBar'

function Layout() {
  return (
    <div className="bg-background text-on-surface font-body h-screen overflow-hidden flex antialiased">
      <SideNavBar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopAppBar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative z-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
