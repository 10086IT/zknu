import React, { Component } from 'react';
import { currentJobs } from '../../../../net/api'
import Title from '../../../components/Title'
import './style.css';
//系统通知

export default class MsgDetails extends React.Component {

  render() {
    console.log(this.props)
    const { teacherMsg, jobsDetail } = this.props
    const { headpic } = teacherMsg
    const { title, linkman, now_nums, nums } = jobsDetail
    return (
      <div className="msg-detail">
        <div className="home-header" style={{ display: 'block' }}>
          <div className="header-title" style={{ textAlign: 'center' }}>我的任务</div>
        </div>
        <div className="msg-main">
          <div className="teach-head" style={{ background: `url('${headpic}')` }}></div>
          <div className="item-right-box"><div className="item-job">{title}</div>
            <div className="item-right">
              <div className="item-name">联系人：{linkman}</div>
              <div className="item-nums">还需{nums - now_nums}人加入</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

