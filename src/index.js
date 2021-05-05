import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter, Router } from "react-router-dom";
import Home from './spages/Home'
import Person from './spages/Person'
import Msg from './spages/msg'
import NoMatch from './spages/NoMatch'
import Login from './pages/login';
import Guide from './pages/guide';
import Details from './spages/details';
import Discovery from './spages/discovery'
import Loadable from 'react-loadable'
import Loading from './components/loading'
const Load_home = Loadable({
  loader: () => import('./spages/Home/index'),
  loading: Loading
})
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Guide}></Route>
        <Route exact path="/index" component={Load_home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/details" component={Details} ></Route>
        <Route exact path="/discovery" component={Discovery}></Route>
        <Route exact path="/msg" component={Msg}></Route>
        <Route exact path="/owner" component={Person}></Route>
        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
if (module.hot) {
  module.hot.accept()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
