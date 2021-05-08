import { message } from 'antd';
import React from 'react'
import { modifyPhone } from '../../../../net/api';
import OwnerTilte from '../Title'
import './style.css'
//数字
const ACCOUNT_PATTERN = /^[0-9]*$/
class ModifyPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phone: '' }
  }
  formDataChange = (inputName, e) => {
    let value = e.target.value
    if (!ACCOUNT_PATTERN.test(value)) {
      message.warning('请输入数字')
      return
    }
    this.setState({
      [inputName]: value && value.trim()
    })
  }
  submitData = async () => {
    const { phone } = this.state
    if (phone.length < 10) {
      message.info('长度11位')
      return
    }
    await modifyPhone({ phone }).then((res) => {
      const { isSuccess, msg } = res
      if (isSuccess) {
        setTimeout(function () {
          window.location.href = "http://localhost:3000/owner"
        }, 1000)
        message.success(msg)
      }
    }).catch((e) => {
      message.info(e.msg)
    })

  }
  render() {
    const { phone } = this.state
    return (
      <div className="modify-phone-page">
        <OwnerTilte title={'手机号'} isShowBack={true} />
        <div className="mpg-title">修改手机号</div>

        <div className='modify-phone'>
          <div className='input-title mpg-phone-title'>+86</div>
          <div className='input-wrap'>
            <input className='input-self'
              placeholder='请输入您的手机号'
              maxLength={14}
              value={phone}
              onChange={this.formDataChange.bind(this, 'phone')}
            />
          </div>
        </div>
        <div className="btn-modify-phone-box">
          <div className="btn-modify-phone" onClick={this.submitData}>提交</div>

        </div>

      </div>
    );
  }
}

export default ModifyPhone;