import React from 'react';
import './App.scss';
import { NavLink, Switch, Route } from 'react-router-dom';

import TestApiUseEffect from './component/testApiUseEffect';
import TestApiClassComponent from './component/testApiClassComponent';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/test'>Test</NavLink>
        <NavLink to='/testApiUseEffect'>Test APi UseEffect</NavLink>
        <NavLink to='/testApiClassComponent'>Test Api Class lifecycle</NavLink>
      </nav>
      <section>
        <Switch>
          <Route path="/" exact render={() => <p>This is HOME!</p>} />
          <Route path="/test" exact render={() => <p>This is TEST!</p>} />
          <Route path="/testApiUseEffect" render={() => <TestApiUseEffect />} />
          <Route path="/testApiClassComponent" render={() => <TestApiClassComponent />} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
