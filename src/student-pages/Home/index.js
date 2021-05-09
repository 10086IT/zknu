import { message } from 'antd';
import React, { Component } from 'react';
import { getJobsMsg } from '../../net/api';
import TabBar from '../components/tabbar';
import './style.css'

//兼职任务搜索列表
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      jobs_lists: [],
      count: 0,
      teacherName: []
    }

  }
  componentDidMount() {
    const { count } = this.state
    this.loadData(count)
  }
  loadData = async (count) => {
    const { jobs_lists, teacherName } = this.state
    let newData = JSON.parse(JSON.stringify(jobs_lists))
    let newTeacherName = JSON.parse(JSON.stringify(teacherName))
    await getJobsMsg({ count }).then((res) => {
      const { data, teacherName } = res
      if (data.length === 0) {
        message.info('没有更多数据')
        return
      }
      this.setState({
        jobs_lists: newData.concat(data),
        teacherName: newTeacherName.concat(teacherName)
      })
    }).catch((e) => {
      message.warning(e)
    })
  }
  handleMore = () => {
    const { jobs_lists, count } = this.state
    this.setState({
      count: count + 1
    })
    this.loadData(count + 1)
  }
  search = () => {
    window.location.href = 'http://localhost:3000/student/search'
  }
  detailPage = (name, imgURl, item, e) => {
    console.log(name, imgURl, item)
    localStorage.setItem('name', name)
    localStorage.setItem('teacherImgUrl', imgURl)
    localStorage.setItem('item', JSON.stringify(item))
    window.location.href = "http://localhost:3000/student/details"
    return
  }
  render() {

    const { jobs_lists, teacherName } = this.state
    console.log(teacherName)
    return (
      <div className="home">
        <div className="home-header">
          <div className="header-title">首页</div>
          <div className="header-select" onClick={this.search}></div>
        </div>
        <div className="home-main">
          {
            jobs_lists.map((item, index) => {
              const { account, id, now_nums, nums, phone, title } = item
              const imgURl = teacherName[index]['headpic']
              const name = teacherName[index]['name']
              return (
                <div className="lists" key={index} onClick={this.detailPage.bind(this, name, imgURl, item)}>
                  <div className="item-left" style={{ background: `url(${imgURl})` }}></div>
                  <div className="item-right-box"><div className="item-job">{title}</div>
                    <div className="item-right">
                      <div className="item-name">{name}</div>
                      <div className="item-nums">招募人数{nums - now_nums}人</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="jobs-more" onClick={this.handleMore}>加载更多...</div>
        <TabBar />
      </div>

    );
  }
}
export default Home