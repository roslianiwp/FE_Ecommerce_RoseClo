import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
// import NotMatch from "../pages/NotMatch";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Items from "../pages/Items";
import ItemDetail from "../pages/ItemDetail";

import { Provider } from "react-redux";
import store from "../store";
import SignUpSeller from "../pages/SignUpSeller";
import FormBiodata from "../pages/FormBiodata";
import InputProduct from "../pages/InputProduct";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/item" component={Items} />
          <Route exact path="/itemdetail" component={ItemDetail} />
          <Route exact path="/signupseller" component={SignUpSeller} />
          <Route exact path="/signupseller" component={SignUpSeller} />
          <Route exact path="/biodata" component={FormBiodata} />
          <Route exact path="/inputproduct" component={InputProduct} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/item/:category" component={Items} />
          <Route exact path="/itemdetail/:id" component={ItemDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
