import React, { Suspense, lazy } from 'react';
import { Switch, Route, BrowserRouter, } from 'react-router-dom';
import { openRoutes, } from './routes';

import HomePage from './components/homePage';
import LandingPage from './components/landingPage';

// const ROUTES = [
//   {
//     exact: true,
//     path: openRoutes.root,
//     component: HomePage,
//   },
//   {
//     exact: true,
//     path: openRoutes.landing,
//     component: LandingPage,
//   },
// ]

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        path={openRoutes.root}
        component={HomePage}
      />
      <Route
        exact={true}
        path={openRoutes.signup}
        component={LandingPage}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
