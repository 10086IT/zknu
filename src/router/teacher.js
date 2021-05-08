import React from 'react';
import { Route } from "react-router-dom";
import { Fragment } from 'react';
import { checkTeacherLogin } from './utils';
import TeacherIndex from '../teacher-pages';


export default class TeachersRouter extends React.Component {
  componentDidMount() {
    checkTeacherLogin()
  }
  render() {
    return (
      <Fragment>
        <Route exact path="/teacher/index" component={TeacherIndex}></Route>
      </Fragment>
    )

  }
}

