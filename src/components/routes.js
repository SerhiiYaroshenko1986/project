import React from "react";
import { Switch, Route } from "react-router";

import Phones from "./containers/phones";
import Phone from "./containers/phone";
import Basket from "./containers/basket";
import About from "./containers/About";
import Contact from "./containers/contacts";
import Delivery from "./containers/delivery";
export default (
  <Switch>
    <Route path="/" component={Phones} exact />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/basket" component={Basket} />
    <Route path="/about" component={About} />
    <Route path="/delivery" component={Delivery} />
    <Route path="/contacts" component={Contact} />
  </Switch>
);
