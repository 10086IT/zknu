import React from 'react';
import { Route } from "react-router-dom";
import Home from '../teacher-pages/home'
export default class LoginedRouter extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <Fragment>
        <Route exact path="/tindex" component={Home}></Route>

      </Fragment>
    )

  }
}

