import React from 'react';
import './App.scss';
import { NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/test'>Test</NavLink>
      </nav>
      <section>
        <Switch>
          <Route path="/" exact render={() => <p>This is HOME!</p>} />
          <Route path="/test" exact render={() => <p>This is TEST!</p>} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
