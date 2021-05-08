import React from 'react';
import { Route } from "react-router-dom";
import Home from '../spages/Home'
import Owner from '../spages/owner'
import Msg from '../spages/msg'
import Details from '../spages/details';
import Discovery from '../spages/discovery'
import { Fragment } from 'react';
import UploadThumb from '../components/uploadImg'
import { checkStudentLogin } from '../net/api'
import ModifyPhone from '../spages/owner/components/modify-phone';

export default class StudentsRouter extends React.Component {
  componentDidMount() {
    checkStudentLogin()
  }
  render() {
    return (
      <Fragment>
        <Route exact path="/index" component={Home}></Route>
        <Route exact path="/discovery" component={Discovery} ></Route>
        <Route exact path="/details" component={Details} ></Route>
        <Route exact path="/msg" component={Msg}></Route>
        <Route exact path="/uploadImg" component={UploadThumb}></Route>
        <Route exact path="/owner" component={Owner}></Route>
        <Route exact path="/modifyphone" component={ModifyPhone}></Route>
      </Fragment>
    )

  }
}

