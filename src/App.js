import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import ContainerGroup from "./CounterGroup/containers/ContainerGroup";
import TodoContainer from "./Todo/containers/TodoContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Router>
                    <div>

                        <Switch>
                            <Route exact path="/">
                              <Todo />
                            </Route>
                            <Route path="/counter-group">
                                <CounterGroup/>
                            </Route>
                        </Switch>

                        <hr/>

                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/counter-group">CounterGroup</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </header>
        </div>
    );
}

function Todo() {
    return (
        <div>
            <h2><TodoContainer/></h2>
        </div>
    );
}

function CounterGroup() {
    return (
        <div>
            <h2><ContainerGroup/></h2>
        </div>
    );
}

export default App;
