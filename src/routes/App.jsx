import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../styles/components/Globals.styl"

import Home from "../containers/Home"
import Payment from "../containers/Payment"
import NotFound from "../containers/NotFound"
import Layout from "../components/Layout"


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App