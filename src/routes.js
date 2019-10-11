import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

export default (
  <Switch>
    <Route exact path="/" component={ProductList} />
    <Route path="/product/:id" component={Product} />
  </Switch>
);
