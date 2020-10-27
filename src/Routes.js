import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./About/About";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';

import ContactForm from "./components/pages/ContactPage ";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={ContactForm} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}