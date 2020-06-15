import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import styles from "../../views/Report/Report.css";



import { AppAside, AppBreadcrumb, AppFooter,AppSidebar,AppSidebarHeader,AppSidebarForm,AppSidebarNav,AppSidebarFooter,AppSidebarMinimizer  } from "@coreui/react";
// routes config
import routes from "../../routes";
import Dashboard from "../../views/ShareHolder/DashboardChart";
import TrafficandSales from "../../views/ShareHolder/TrafficandSales";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

//const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        items: [
          {
            name: "Dashboard",
            url: "/dashboard/1",
            icon: "icon-speedometer",
            badge: {
              variant: "info",
              text: "NEW",
            },
          },
          {
            title: true,
            name: "EKYC",
            wrapper: {
              // optional wrapper object
              element: "", // required valid HTML5 element tag
              attributes: {}, // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: "", // optional class names space delimited list for title item ex: "text-center"
          },
          {
            name: 'Traffic & Sales',
            url: '/dashboard/2',
            icon: 'icon-pencil',
          },
          {
            name: 'Demographics',
            url: '/dashboard/3',
            icon: 'icon-puzzle',
          },
          {
            name: 'Customer Visit',
            url: '/dashboard/4',
            icon: 'icon-puzzle',
          },
        ],
      },
    };
  }

  loading = () => (
    <div id="loading" className="text-center">
      <img
        id="loading-image"
        src="http://www.broadwaybalancesamerica.com/images/ajax-loader.gif"
        alt="Loading..."
      />
    </div>
  );

  signOut(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/login");
  }

  // componentDidMount() {
  //   var items = this.state.items;
  //   items.items.push({
  //     name: "List",
  //     url: "/project/view",
  //     icon: "icon-list",
  //   });
  //   this.setState({
  //     items,
  //   });
  // }

  render() {
    return (
      <div className={"app " + styles.back_color_app}>
        <div className={"app-body " + styles.margin0}>
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={this.state.items} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => <Dashboard {...props} />}
                      />
                      
                    ) : null;
                  })}
                  <Redirect from="/" to="/dashboard/1" />
                  
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
