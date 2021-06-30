import { BrowserRouter, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'src/routes';

import { PrivateRoute } from 'src/routes/PrivateRoute';
import { PublicRoute } from 'src/routes/PublicRoute';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      {/* Router */}
      <BrowserRouter>
        <Switch>
          {publicRoutes.map((item, index) => (
            <PublicRoute key={`0${index}`} {...item} />
          ))}
          {privateRoutes.map((item, index) => (
            <PrivateRoute key={`1${index}`} {...item} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
