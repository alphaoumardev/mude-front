import React from "react";
import PageTitle from "../components/Typography/PageTitle.jsx";
import ChartCard from "../components/Chart/ChartCard.jsx";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend.jsx";
import {
  lineOptions,
  lineLegends,
  realTimeUsersBarLegends,
  realTimeUsersBarOptions,
} from "../utils/demo/chartsData";
import UsersTable from "../components/UsersTable.jsx";

const Customers = () => {
  return (
    <div>
      <PageTitle>Manage Customers</PageTitle>

      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="User Details">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>

        <ChartCard title="Online Visitors">
          <Bar {...realTimeUsersBarOptions} />
          <ChartLegend legends={realTimeUsersBarLegends} />
        </ChartCard>
      </div>

      <UsersTable resultsPerPage={10} />
    </div>
  );
};

export default Customers;
