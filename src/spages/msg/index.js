import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
//系统通知

class Msg extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className="home-header">
          <div className="header-title">消息</div>
        </div>
        <TabBar />
      </div>
    );
  }
}

export default Msg;