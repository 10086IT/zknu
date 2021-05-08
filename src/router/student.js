import React from 'react';
import { Route } from "react-router-dom";
import Home from '../student-pages/Home'
import Owner from '../student-pages/owner'
import Msg from '../student-pages/msg'
import Details from '../student-pages/details';
import Discovery from '../student-pages/discovery'
import { Fragment } from 'react';
import UploadThumb from '../student-pages/components/uploadImg'
import ModifyPhone from '../student-pages/owner/components/modify-phone';
import { checkStudentLogin } from './utils';
import SearchData from '../student-pages/Home/components/search';

export default class StudentsRouter extends React.Component {
  componentDidMount() {
    checkStudentLogin()
  }
  render() {
    return (
      <Fragment>
        <Route exact path="/student/index" component={Home}></Route>
        <Route exact path="/student/search" component={SearchData}></Route>
        <Route exact path="/student/discovery" component={Discovery} ></Route>
        <Route exact path="/student/details" component={Details} ></Route>
        <Route exact path="/student/msg" component={Msg}></Route>
        <Route exact path="/student/uploadImg" component={UploadThumb}></Route>
        <Route exact path="/student/owner" component={Owner}></Route>
        <Route exact path="/student/modifyphone" component={ModifyPhone}></Route>
      </Fragment>
    )

  }
}

