import LandingPage from './view/LandingPage';
import Dashboard from './view/Dashboard';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage setMenu={setMenu} />
        </Route>
        <Route path="/dashboard">
          <Dashboard menu={menu} setMenu={setMenu} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
