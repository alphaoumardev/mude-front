import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Route, useLocation, Routes,  } from 'react-router-dom'

import Sidebar from '../components/Sidebar/index.jsx'
import { SidebarContext } from '../context/SidebarContext.jsx'
import Dashboard from "../pages/Dashboard.jsx";

// const Page404 = lazy(() => import('../pages/404.jsx'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
          {/*<Main>*/}
              <Dashboard/>
          {/*</Main>*/}
      </div>
    </div>
  )
}

export default Layout
