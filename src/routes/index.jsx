import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/home";
import Instructions from "../pages/instructions";
import Wall from "../components/wall";
import Core from "../components/core";

const Routes = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/instructions">
          <Instructions />
        </Route>
        <Route exact path="/wall">
          <Wall />
        </Route>
        <Route exact path="/core">
          <Core />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
