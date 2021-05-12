import React from 'react';
import './style.css'
class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  back = () => {
    window.location.href = "http://localhost:3000/student/owner"
    return
  }
  render() {

    return (
      <div className="user-account">
        <div className="user-account-title">账号设置</div>
        <div className="user-components-back" onClick={this.back}>&lt;</div>
        <div className="user-account-wrap">找回密码</div>
        <div className="user-account-wrap">修改密码</div>
        <div className="user-account-wrap">退出登录</div>
        <div className="user-account-wrap">注销</div>
      </div>
    );
  }
}

export default UserAccount;