import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from '../pages/login';
import Guide from '../pages/guide';
import NoMatch from '../student-pages/NoMatch'

import { Fragment } from 'react';
import StudentsRouter from './student';
import TeachersRouter from './teacher';
import AdminRouter from './admin';
export default class MyRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      iden: localStorage.getItem('iden')
    }
  }
  componentDidMount() {

  }
  render() {
    const { iden } = this.state
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Guide}></Route>
            <Route exact path="/login" component={Login}></Route>
            {iden === 'student' && <StudentsRouter />}
            {iden === 'teacher' && <TeachersRouter />}
            {iden === 'admin' && <AdminRouter />}
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )

  }
}

