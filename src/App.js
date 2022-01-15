import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import ProductView from "./views/ProductView";
import CartView from "./views/CartView";
import Home from "./views/Home";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path={"/product/:id"} exact component={ProductView} />
          <Route path={"/cart"} exact component={CartView} />
          <Route path={"/"} exact component={Home} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
