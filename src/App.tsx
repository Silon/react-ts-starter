import 'src/styles/reset.css';
import 'src/styles/base.css';

import { Route, Routes } from 'react-router';

import { BrowserRouter } from 'react-router-dom';
import { PageHome } from 'src/pages/PageHome';
import { PublicRoute } from 'src/routes/PublicRoute';
import { routes } from 'src/config/routes';

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
