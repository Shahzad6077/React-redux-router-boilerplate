import React from "react";

import { Switch, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// TODO: Import your Layouts e.g: Minimal || Main
import { Main as MainLayout, Minimal as MinimalLayout } from "./Layout";
// Define you derived routes that use Route with Layout.
import RouteWithLayout from "./Components/RouteWithLayout";

import { NotFound as NotFoundView, Login } from "./Views";
const routesList = [
  {
    id: 1,
    path: "/protected-route",
    component: Login,
    layout: MainLayout,
  },
  {
    id: 2,
    path: "/public-route",
    component: Login,
    layout: MinimalLayout,
  },
];

const Routes = () => {
  const userRole = useSelector(({ authReducer }) => {
    if (authReducer.user) {
      return authReducer.user.role;
    }
    return "public";
  });

  const isLoggedIn = useSelector((state) => state.authReducer.token !== null);

  let derivedRoutes = [];

  switch (userRole) {
    case "admin":
      //   filter out all views that you need
      const adminRoutesId = [1];
      derivedRoutes = routesList.filter(({ id }) => adminRoutesId.includes(id));
      break;

    case "user":
      const userRoutesId = [1];
      derivedRoutes = routesList.filter(({ id }) => userRoutesId.includes(id));
      break;

    case "public":
      //   filter out all views that you need
      const publicRoutesId = [2];
      derivedRoutes = routesList.filter(({ id }) =>
        publicRoutesId.includes(id)
      );
      break;
    default:
      break;
  }

  return (
    <Switch>
      {/*  */}

      {derivedRoutes.map((route) => {
        return (
          <RouteWithLayout
            key={route.id}
            component={route.component}
            layout={route.layout}
            path={route.path}
            exact
          />
        );
      })}

      <Route exact path="/">
        <Redirect to={isLoggedIn ? "/protected-route" : "/sign-in"} />
      </Route>

      <Route exact path="/not-found" component={NotFoundView} />
      <Route component={Login} />
    </Switch>
  );
};

export default Routes;
