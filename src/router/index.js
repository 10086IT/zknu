import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../spages/Home'
import Person from '../spages/Person'
import Msg from '../spages/msg'
import NoMatch from '../spages/NoMatch'
import Login from '../pages/login';
import Guide from '../pages/guide';
import Details from '../spages/details';
import Discovery from '../spages/discovery'
import { Fragment } from 'react';
import MyLoadImg from '../components/uploadImg'

export default class MyRouter extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Guide}></Route>
            <Route exact path="/index" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/details" component={Details} ></Route>
            <Route exact path="/discovery" component={Discovery}></Route>
            <Route exact path="/msg" component={Msg}></Route>
            <Route exact path="/uploadImg" component={MyLoadImg}></Route>
            <Route exact path="/owner" component={Person}></Route>
            <Route path="*" component={NoMatch}></Route>
          </Switch>
        </BrowserRouter>
      </Fragment>
    )

  }
}

