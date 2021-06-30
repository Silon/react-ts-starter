import { Redirect, Route, RouteProps } from 'react-router-dom';

import React from 'react';
import { selectTokenAuth } from 'src/redux/auth/auth.selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const tokenAuth = useSelector(selectTokenAuth);

  if (!!tokenAuth) return <Route {...props} />;
  else return <Redirect to="/" />;
};
