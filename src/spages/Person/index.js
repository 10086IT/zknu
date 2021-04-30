import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>person
        <TabBar />
      </div>
    );
  }
}

export default Person;