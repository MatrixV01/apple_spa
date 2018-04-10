import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Apple SPA - Brad Fincher</h1>
          <ul className="header">
            <li><NavLink to="/">Task 1</NavLink></li>
            <li><NavLink to="/task2">Task 2</NavLink></li>
            <li><NavLink to="/task3">Task 3</NavLink></li>
            <li><NavLink to="/task4">Task 4</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Task1} />
            <Route path="/task2" component={Task2} />
            <Route path="/task3" component={Task3} />
            <Route path="/task4" component={Task4} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;