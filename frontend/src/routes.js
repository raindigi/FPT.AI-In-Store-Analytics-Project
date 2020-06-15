import React from "react";
//import DefaultLayout from "./containers/DefaultLayout";


const Layout = React.lazy(() => import("./views/ShareHolder/Layout"));
// const Test = React.lazy(() => import("./views/ShareHolder/InputInfo"));
const Chart = React.lazy(() => import("./views/ShareHolder/DashboardChart"));
const TrafficSales = React.lazy(() => import("./views/ShareHolder/TrafficandSales"));
const Demographics = React.lazy(() => import("./views/ShareHolder/Demographics"));
const CustomerVisit = React.lazy(() => import("./views/ShareHolder/CustomerVisit"));



const routes = [
  {path: "/dashboard/:id", exact: true, name: "Admin Dashboard", component: Chart},
  
];

export default routes;
