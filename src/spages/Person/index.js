import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
import './style.css'
class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="owner-page">
        <div className="home-header">
          <div className="header-title">我的</div>

        </div>
        <div className="owner-head">
          <div className="owner-head-left">
            <div className="pic-owner-head"></div>
          </div>
          <div className="owner-head-right" >
            <div className="owner-head-right-msg">
              <div className="owner-name">
                <strong>李白</strong>
              </div>
              <div className="owner-account">学号：202116369689</div>
            </div>
            <div className="modify-owner-msg">&gt;</div>
          </div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">手机号</div>
          <div className="owner-msg-detail">1833696336</div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">性别</div>
          <div className="owner-msg-detail">男</div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">生日</div>
          <div className="owner-msg-detail">2020-02-01</div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">手机号</div>
          <div className="owner-msg-detail">1833696336</div>
        </div>

        <div className="owner-msg">历史任务</div>
        <div className="owner-msg">当前任务</div>
        <div className="owner-msg">隐私与安全</div>
        <div className="owner-msg">意见反馈</div>
        <div className="owner-msg">清除缓存</div>
        <div className="owner-msg">关于</div>
        <div className="owner-msg">账户</div>
        <TabBar />
      </div>
    );
  }
}

export default Person;