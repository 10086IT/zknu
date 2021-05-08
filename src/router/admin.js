import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react';
import { checkAdminLogin } from './utils';

export default class AdminRouter extends React.Component {
  componentDidMount() {
    checkAdminLogin()
  }
  render() {
    return (
      <Fragment>
        admin
      </Fragment>
    )

  }
}

