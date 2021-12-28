import 'styles/reset.css';
import 'styles/base.css';

import { Route, Routes } from 'react-router';

import { BrowserRouter } from 'react-router-dom';
import { PageHome } from 'pages/PageHome';
import { PublicRoute } from 'routes/PublicRoute';
import { routes } from 'config/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute component={<PageHome />} />} path={routes.home()} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
