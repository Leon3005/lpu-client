import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

import HomePage from "../pages/HomePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
