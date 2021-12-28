import { Route, RouteProps, useNavigate } from "react-router-dom";

import React from "react";
import { routes } from "config/routes";
import { selectTokenAuth } from "redux/auth/auth.selectors";
import { useAppSelector } from "redux/hooks";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const tokenAuth = useAppSelector(selectTokenAuth);
  const navigate = useNavigate();

  if (!tokenAuth) {
    navigate(routes.home());
    return null;
  }

  return <Route {...props} />;
};
