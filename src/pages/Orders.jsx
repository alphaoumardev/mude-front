import React, {useContext, useEffect, useState} from "react";
import PageTitle from "../components/Typography/PageTitle.jsx";
import {NavLink, useLocation} from "react-router-dom";
import { Card, CardBody, Label, Select } from "@windmill/react-ui";
import OrdersTable from "../components/OrdersTable.jsx";
import {HomeOutline} from "heroicons-react";
import Sidebar from "../components/Sidebar/index.jsx";
import Main from "../containers/Main.jsx";
import {SidebarContext} from "../context/SidebarContext.jsx";


const Orders = () =>
{
  // pagination setup
  // const [resultsPerPage, setResultPerPage] = useState(1);
  const [filter, setFilter] = useState("all");

  const handleFilter = (filter_name) =>
  {
    // console.log(filter_name);
    if (filter_name === "All")
    {
      setFilter("all");
    }
    if (filter_name === "Un-Paid Orders")
    {
      setFilter("un-paid");
    }
    if (filter_name === "Paid Orders")
    {
      setFilter("paid");
    }
    if (filter_name === "Completed")
    {
      setFilter("completed");
    }
  };

    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    let location = useLocation()

    useEffect(() =>
    {
      closeSidebar()
    }, [location])

    return (
      <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
        <Sidebar />
        <div className="flex flex-col flex-1 w-full">
          <Main>
            <div>
              <PageTitle>Orders</PageTitle>

              {/* Breadcum */}
              <div className="flex text-gray-800 dark:text-gray-300">
                <div className="flex items-center text-purple-600">
                  <HomeOutline className="w-5 h-5" aria-hidden="true"  />
                  <NavLink to="/app/dashboard" className="mx-2">
                    Dashboard
                  </NavLink>
                </div>
                {">"}
                <p className="mx-2">Orders</p>
              </div>

              {/* Sort */}
              <Card className="mt-5 mb-5 shadow-md">
                <CardBody>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Filter Orders
                    </p>

                    <Label className="mx-3">
                      <Select
                          className="py-3"
                          onChange={(e) => handleFilter(e.target.value)}
                      >
                        <option>All</option>
                        <option>Un-Paid Orders</option>
                        <option>Paid Orders</option>
                        <option>Completed</option>
                      </Select>
                    </Label>

                    <Label className="">
                      {/* <!-- focus-within sets the color for the icon when input is focused --> */}
                      <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                        {/*<input*/}
                        {/*    className="py-3 pr-5 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"*/}
                        {/*    value={resultsPerPage}*/}
                        {/*    onChange={(e) => setResultPerPage(e.target.value)}*/}
                        {/*/>*/}
                        {/*<div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">*/}
                        {/*  /!* <SearchIcon className="w-5 h-5" aria-hidden="true" /> *!/*/}
                        {/*  Results on Table*/}
                        {/*</div>*/}
                      </div>
                    </Label>
                  </div>
                </CardBody>
              </Card>

              {/* Table */}
              <OrdersTable  filter={filter} />
            </div>
          </Main>
        </div>
      </div>
  );
};

export default Orders;
