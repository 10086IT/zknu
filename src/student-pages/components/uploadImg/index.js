import { message } from 'antd';
import axios from 'axios';
import React, { PureComponent } from 'react';
import './style.css'
import { ImagePicker } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import Title from '../Title';


export default class UploadThumb extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }

  }

  submitData = async () => {
    const { files } = this.state
    if (files.length === 0) {
      return
    }
    let iden = localStorage.getItem('iden')
    if (!iden) {
      message.info('请重新登录')
      setTimeout(function () {
        window.location.href = 'http://localhost:3000'
      }, 1000)
      return
    }
    let formData = new FormData();
    let file = this.state.files[0].file;
    formData.append('images', file);
    formData.append('path', '/public')   // 这里根据自己项目后台实际情况定
    let url = 'http://localhost:7001/upload';
    await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', token: localStorage.getItem('token')
      }
    }).then((res) => {
      //成功跳转owner
      if (res.status === 200) {
        const { data } = res
        if (data.status === -100) {
          setTimeout(function () {
            window.location.href = 'http://localhost:3000'
          }, 1000)
          message.info(data.msg)
          return
        }
        const { isSuccess, imgUrl } = res.data
        if (isSuccess) {
          setTimeout(function () {
            window.location.href = 'http://localhost:3000/student/owner'
          }, 1000)
          localStorage.setItem('imgUrl', imgUrl)
          message.success('头像上传成功')
          return
        }
      }
    }).catch((e) => {
      message.info(e.msg)
    });

  }


  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };
  onTabChange = (key) => {
    console.log(key);
  };
  render() {
    const { files } = this.state;
    return (
      <div className="uploadThumb">
        <Title title={'头像修改'} isShowBack={true} />
        <ImagePicker
          length="1"
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          disableDelete={false}
          accept="image/gif,image/jpeg,image/jpg,image/png"
        />
        <div className="btn-upload" onClick={this.submitData}>更换头像</div>
      </div>
    )
  }
}

