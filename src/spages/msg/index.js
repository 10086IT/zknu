import React, { Component } from 'react';
import { checklogin } from '../../net/api'
import TabBar from '../../components/tabbar';
//系统通知

class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' }
  }
  listener = () => {

  }
  componentDidMount() {
    checklogin()
  }
  redi = () => {
  }
  render() {
    return (
      <div>{this.state.data}
        <button onClick={this.redi}>啦啦啦</button>
        <TabBar />
      </div>
    );
  }
}

export default Msg;