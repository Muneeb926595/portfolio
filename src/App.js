import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";

import "./App.css";
import { Home, About, Services, Portfolio, Client, Contact } from "@modules";
//make pages lazy that are not going to be used frequently
// const TermOfUse = lazy(() => import("@modules/TermOfUse"));
// const UpdateProfile = lazy(() => import("@modules/UpdateProfile"));
// const MyCupOfTea = lazy(() => import("@modules/MyCupOfTea/MyCupOfTea"));
// const SocialMediaSignUp = lazy(() => import("@modules/SocialMediaSignUp"));

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Suspense fallback={<div>Loading..</div>}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="*"
              component={() => (
                <h1 style={{ marginLeft: "10%" }}>404 Not Found</h1>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
