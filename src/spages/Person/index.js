import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="owner-page">
        <div className="owner-title"></div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <TabBar />
      </div>
    );
  }
}

export default Person;