import React, { Component, Fragment } from 'react'
import Title from '../../components/Title';
import './style.css'
import { message } from 'antd'
import { login } from '../../net/api'
import cookie from 'react-cookies'
//数字
const ACCOUNT_PATTERN = /^[0-9]*$/

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      pwd: ''
    }
  }

  componentDidMount() {
    let account = localStorage.getItem('account')
    let pwd = localStorage.getItem('pwd')
    if (account) {
      this.setState({
        account,
        pwd
      })
    }
  }
  formDataChange = (inputName, e) => {
    let value = e.target.value
    if (inputName === 'account' && !ACCOUNT_PATTERN.test(value)) {
      message.warning('请输入数字')
      return
    }
    this.setState({
      [inputName]: value && value.trim()
    })

  }
  confirm = async (account, pwd) => {

    let iden = localStorage.getItem('iden')
    const data = {
      iden, account, pwd
    }
    //登录
    await login(data).then((res) => {
      const { code, userId } = res
      localStorage.setItem('token', userId)
      message.success('登录成功')
      setTimeout(function () {
        window.location.href = "http://localhost:3000/index"
      }, 2000)
    }
    ).catch((e) => {
      message.warning(e.msg)
    })
  }
  submitData = async () => {
    const { account, pwd } = this.state
    if (account.length < 6) {
      message.warning('账号错误')
      return
    }

    if (pwd.length < 6) {
      message.warning('密码错误')
      return
    }

    this.confirm(account, pwd)
  }

  render() {
    const { account, pwd } = this.state
    return (
      <Fragment>
        <Title title={'登录'} isShowBack={true} url={'http://localhost:3000'} />
        <div className="login">
          <div className='form-wrap account'>
            <div className='input-title'>账号</div>
            <div className='input-wrap'>
              <input className='input-self'
                placeholder='请输入您的账号'
                maxLength={20}
                value={account}
                onChange={this.formDataChange.bind(this, 'account')}
              />
            </div>
          </div>
          <div className='form-wrap '>
            <div className='input-title'>密码</div>
            <div className='input-wrap'>
              <input className='input-self'
                placeholder='请输入您的密码'
                maxLength={16}
                value={pwd}
                onChange={this.formDataChange.bind(this, 'pwd')}
              />
            </div>
          </div>
          <div className="form-wrap other">
            <div className="forget-pwd">帮助</div>
            <div className="forget-pwd">找回密码</div>
          </div>
          <div
            className='form-wrap confirm-btn '
            onClick={this.submitData}
          >
            提交
          </div>
        </div>


      </Fragment >

    );
  }
}

export default Login;
