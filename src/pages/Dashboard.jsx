import React from "react";

import InfoCard from "../components/Cards/InfoCard.jsx";
import ChartCard from "../components/Chart/ChartCard.jsx";
import {Bar, Line} from "react-chartjs-2";
import PageTitle from "../components/Typography/PageTitle.jsx";
import RoundIcon from "../components/RoundIcon.jsx";

import {
  lineOptions,
   realTimeUsersBarOptions,
} from "../utils/demo/chartsData";
import OrdersTable from "../components/OrdersTable.jsx";
import {IoMdPeople} from "react-icons/io";
import {MdMoney} from "react-icons/md";
import {ChatAltOutline, ShoppingBag} from "heroicons-react";
import CTA from "../components/CTA.jsx";

function Dashboard() {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <CTA /> */}
        <CTA/>
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total customers" value="765">
          <RoundIcon
            icon={IoMdPeople}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total income" value="$ 6,760.89">
          <RoundIcon
            icon={MdMoney}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="New Orders" value="150">
          <RoundIcon
            icon={ShoppingBag}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Unread Chats" value="15">
          <RoundIcon
            icon={ChatAltOutline}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="User Analytics">
          <Line {...lineOptions} />
        </ChartCard>

        <ChartCard title="Revenue">
          <Bar {...realTimeUsersBarOptions} />

        </ChartCard>
      </div>

      <PageTitle>Orders</PageTitle>
      <OrdersTable resultsPerPage={10} />
    </>
  );
}

export default Dashboard;
