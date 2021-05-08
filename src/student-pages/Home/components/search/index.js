import { message } from 'antd';
import React from 'react';
import { searchJobs } from '../../../../net/api';
import Title from '../../../components/Title';
import './style.css'



const pattern = /^[\u4E00-\u9FA5A-Za-z0-9]+$/

class SearchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      jobs_lists: [],
      count: 0,
      teacherName: [],
      data: ''
    }
  }

  formChangeData = (e) => {
    let value = e.target.value
    if (pattern.test()) {
      this.setState({
        data: value && value.trim()
      })
    }

  }
  handleSearch = async () => {
    const { data } = this.state
    if (data.length === 0) {
      message.info('不能为空')
      return
    }
    const { jobs_lists, teacherName } = this.state

    await searchJobs({ data }).then((res) => {
      const { newResult: data, teacherName, status, msg } = res
      if (status === 95) {
        message.info(msg)
        return
      }
      if (data.length === 0) {
        message.info('没有更多数据')
        return
      }
      this.setState({
        jobs_lists: data,
        teacherName: teacherName
      })
    }).catch((e) => {
      console.log(e)
    })
  }
  render() {
    const { data, jobs_lists, teacherName } = this.state
    return (
      <div className="search-data-page">
        <Title title={'搜索'} isShowBack={true} />
        <div className="input-search">
          <input type="text"
            maxLength={20}
            value={data}
            className="adjust-input"
            placeholder="搜索兼职信息"
            onChange={this.formChangeData}
          />
          <div className="tosearch" onClick={this.handleSearch}></div>
        </div>
        <div className="home-main">
          {
            jobs_lists.map((item, index) => {
              const { account, id, now_nums, nums, phone, title } = item
              const imgURl = teacherName[index]['headpic']
              return (
                <div className="lists" key={index} >
                  <div className="item-left" style={{ background: `url(${imgURl})` }}></div>
                  <div className="item-right-box"><div className="item-job">{title}</div>
                    <div className="item-right">
                      <div className="item-name">{teacherName[index]['name']}</div>
                      <div className="item-nums">招募人数{nums - now_nums}人</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default SearchData;