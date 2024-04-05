import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const GuardedRoute = ({ auth, component: Component, ...routeProps }) => {
  return (
    <Fragment>
      {auth === true ? (
        <Component {...routeProps} />
      ) : (
        <Navigate to="/restricted" />
      )}
    </Fragment>
  );
};

export default GuardedRoute;
