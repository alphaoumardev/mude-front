import React, {useContext, useEffect} from "react";
import PageTitle from "../components/Typography/PageTitle.jsx";
import ChartCard from "../components/Chart/ChartCard.jsx";
import { Line, Bar } from "react-chartjs-2";
import {
  lineOptions,
  realTimeUsersBarOptions,
} from "../utils/demo/chartsData";
import UsersTable from "../components/UsersTable.jsx";
import Sidebar from "../components/Sidebar/index.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";
import {useLocation} from "react-router-dom";
import {CategoryScale} from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(CategoryScale);
Chart.register(...registerables);
const Customers = () =>
{
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    let location = useLocation()

    useEffect(() =>
    {
        closeSidebar()
    }, [location])

    return (
      <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
          <Sidebar />
          <div className="flex flex-col flex-1 w-full ">
              <div>
                  <PageTitle>Manage Customers</PageTitle>

                  <div className="grid gap-6 mb-8 md:grid-cols-2">
                      <ChartCard title="User Details">
                          <Line {...lineOptions}   />
                      </ChartCard>

                      <div className="">
                          <ChartCard title="Online Visitors">
                              <Bar {...realTimeUsersBarOptions} />
                          </ChartCard>
                      </div>

                  </div>
                  <UsersTable resultsPerPage={10} />
              </div>
          </div>
      </div>
  );
};

export default Customers;
