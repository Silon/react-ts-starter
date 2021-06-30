import { Route, RouteProps } from 'react-router-dom';

import React from 'react';

export const PublicRoute: React.FC<RouteProps> = (props) => {
  // Custom logic may be added in future
  return <Route {...props} />;
};
