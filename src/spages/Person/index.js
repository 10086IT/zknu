import React, { Component } from 'react';
import TabBar from '../../components/tabbar';
import './style.css'
import { ownerMsg } from '../../net/api'
import { message } from 'antd';
import { checklogin } from '../../net/api'



class Person extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '', account: '', phone: '', sex: '', birth: '',
    })
  }
  async componentDidMount() {
    checklogin()
    await this.loadData()
  }
  loadData = async () => {
    await ownerMsg({}).then((res) => {
      const { name, account, phone, sex, birth } = res
      this.setState({
        name, account, phone, sex, birth
      })
    }).catch((e) => {
      setTimeout(function () {
        window.location.href = "http://localhost:3000"
      })
      message.warning('请重新登录')
    })
  }
  render() {
    const { name, account, phone, sex, birth, } = this.state
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
                <strong>{name}</strong>
              </div>
              <div className="owner-account">学号：{account}</div>
            </div>
            <div className="modify-owner-msg">&gt;</div>
          </div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">手机号</div>
          <div className="owner-msg-detail">{phone}</div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">性别</div>
          <div className="owner-msg-detail">{sex}</div>
        </div>
        <div className="owner-msg-box">
          <div className="owner-msg-txt">生日</div>
          <div className="owner-msg-detail">{birth}</div>
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