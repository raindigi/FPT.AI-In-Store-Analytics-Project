import React from "react";
//import DefaultLayout from "./containers/DefaultLayout";


// const Layout = React.lazy(() => import("./views/ShareHolder/Layout"));
const Test = React.lazy(() => import("./views/ShareHolder/InputInfo"));
const Test2 = React.lazy(() => import("./views/ShareHolder/Dashboard"));
const input = React.lazy(() => import("./views/ShareHolder/InputInfo"));
const chart = React.lazy(() => import("./views/ShareHolder/DashboardChart"));


const routes = [
  // {path: "/", exact: true, name: " Home", component: Layout},
  // {path: "/", exact: true, name: " Set up", component: Test},
  // {path:"/Dashboard.js", exact:true, name: "Dashboard", component: Test2},
  // {path:"/InputInfo.js", exact:true, name: "Set up", component: input}
  {path: "/", exact: true, name: " Home", component: chart}
  
];

export default routes;
