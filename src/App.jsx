import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header";
import Basket from "./Body/Basket";
import Footer from "./Footer";
import NotImplemented from "./Body/NotImplemented";
import NotFound from "./Body/NotFound";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route
          exact
          path="/collections"
          render={() => <NotImplemented text="Коллекции" />}
        />
        <Route
          exact
          path="/faq-score"
          render={() => <NotImplemented text="Пополнение счета" />}
        />
        <Route
          exact
          path="/support"
          render={() => <NotImplemented text="Поддержка" />}
        />
        <Route
          exact
          path="/calculating"
          render={() => <NotImplemented text="Оформление" />}
        />
        <Route exact path="/basket" component={Basket} />
        {/* Тк мы работаем в рамках корзины */}
        <Redirect exact from="/" to="/basket" />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
