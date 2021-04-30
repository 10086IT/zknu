import React, { Component } from 'react';
//系统通知
import TabBar from '../../components/tabbar';
class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' }
  }
  listener = () => {

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