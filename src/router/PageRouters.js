import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage"))

export const PageRouters = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
        </Switch>
      </Router>
    </Suspense>
  );
};