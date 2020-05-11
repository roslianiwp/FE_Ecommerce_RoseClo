import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
// import NotMatch from "../pages/NotMatch";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route path="/news-category/:category" component={Home} />
          <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
