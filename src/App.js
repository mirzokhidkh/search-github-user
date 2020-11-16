import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/GithubState";
import {Navbar} from "./components/navbar/navbar";
import {Alert} from "./components/alert/alert";
import {Home} from "./pages/home/home";
import {About} from "./pages/about/about";
import {Profile} from "./pages/profile/profile";

function App() {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <Navbar/>
                    <div className="container mt-3 pt-5">
                        <Alert/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/about"  component={About}/>
                            <Route path="/profile/:name"  component={Profile}/>
                        </Switch>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
