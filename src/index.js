import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './App';
import Pages from './Pages.js';
import './i18nextConf';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


ReactDOM.render(
  <Router>
      <Switch>
      <Route exact path="/" component={Table} />
     <Route exact path="/pages/:id" component={Pages} />
    </Switch>
    </Router>
 ,
  document.getElementById('root')
);