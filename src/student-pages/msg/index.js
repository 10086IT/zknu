import React, { Component } from 'react';

import { currentJobs } from '../../net/api'
import './style.css';
import MsgDetails from './components/msg-details';
import TabBar from '../components/tabbar'
//系统通知

export default class Msg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      jobsDetail: {},
      teacherMsg: {},
      progress: '未完成',
      pageState: 0
    }

  }

  componentDidMount() {
    this.loadData()
  }
  loadData = async () => {
    await currentJobs({}).then((res) => {
      console.log(res)
      const { jobsDetail, teacherMsg } = res
      this.setState({
        jobsDetail, teacherMsg
      })
    }).then((e) => {
      console.log(e)
    })
  }
  pageStateTab = () => {
    this.setState({
      pageState: 1
    })
  }
  render() {
    const { progress, pageState, teacherMsg, jobsDetail } = this.state
    const { title, linkman, now_nums, nums, replyprogress } = jobsDetail

    return (
      <div className="msg-page">
        {
          pageState === 0 &&
          <div className="section-menu">
            <div className="home-header" style={{ display: 'block' }}>
              <div className="header-title" style={{ textAlign: 'center' }}>消息</div>
            </div>
            <div className="msg-container">
              <h2 className="msg-bar">当前任务</h2>
              {
                replyprogress === 0 &&
                <div className="current-bar-icon-box" onClick={this.pageStateTab}>
                  <div className="bar-box">
                    <div className="current-bar-icon"></div>
                    <div className="current-jobs-txt">{title}</div>
                  </div>
                  <div className="bar-box-about">{replyprogress === 0 ? progress : ''}&gt;</div>
                </div>
              }

              <h2 className="msg-bar">系统通知</h2>
              <div className="bar-box-about">暂无消息</div>
            </div>
            <TabBar />
          </div>
        }
        {
          pageState === 1 && < MsgDetails teacherMsg={teacherMsg} jobsDetail={jobsDetail} />
        }

      </div>
    );
  }
}

