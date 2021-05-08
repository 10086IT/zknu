import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from '../pages/login';
import Guide from '../pages/guide';
import NoMatch from '../spages/NoMatch'

import { Fragment } from 'react';
import StudentsRouter from './student';
export default class MyRouter extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Guide}></Route>
            <Route exact path="/login" component={Login}></Route>
            <StudentsRouter />
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )

  }
}

