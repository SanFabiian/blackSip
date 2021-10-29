import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles/components/Globals.styl";
import AppContext from "../context/AppContext";
import useGetState from "../hooks/useGetState";
import Home from "../containers/Home";
import Payment from "../containers/Payment";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

const App = () => {
  const initialState = useGetState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment" component={Payment} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
