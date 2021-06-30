import { LinkProps, RouteProps } from 'react-router-dom';

import { Homepage } from 'src/pages/Homepage/Homepage';

export const routesConfig = {
  home: (): LinkProps['to'] => '/',
};

export const privateRoutes: RouteProps[] = [];

export const publicRoutes: RouteProps[] = [
  {
    path: routesConfig.home(),
    component: Homepage,
    exact: true,
  },
];
