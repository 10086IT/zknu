import React, { Component } from 'react'
import Title from '../components/Title'
import { checklogin, joinJobs } from '../../net/api'
import './style.css'
import { message } from 'antd';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            award: '',
            create_time: '',
            detail: '',
            get_people: '',
            id: '',
            linkman: '',
            now_nums: '',
            nums: '',
            phone: '',
            replydata: '',
            replyprogress: '',
            title: '',
            name: '',
            teacherImgUrl: ''
        }
    }
    componentDidMount() {
        let name = localStorage.getItem('name')
        let teacherImgUrl = localStorage.getItem('teacherImgUrl')
        let item = JSON.parse(localStorage.getItem('item'))
        const { account,
            award,
            create_time,
            detail,
            get_people,
            id,
            linkman,
            now_nums,
            nums,
            phone,
            replydata,
            replyprogress,
            title
        } = item
        this.setState({
            account,
            award,
            create_time,
            detail,
            get_people,
            id,
            linkman,
            now_nums,
            nums,
            phone,
            replydata,
            replyprogress,
            title,
            name,
            teacherImgUrl
        })

    }
    joinJobs = async () => {
        const { id } = this.state
        await joinJobs({ jobId: id }).then((res) => {
            const { status, msg } = res
            if (status > 0) {
                message.info('报名成功')
                setTimeout(function () {
                    window.location.replace('/')
                }, 1000)
                return
            }
            message.info(msg)
        }).catch((e) => {
            message.info(e.msg)
        })
    }
    render() {
        const { account,
            award,
            create_time,
            detail,
            get_people,
            id,
            linkman,
            now_nums,
            nums,
            phone,
            replydata,
            replyprogress,
            title,
            name,
            teacherImgUrl }
            = this.state
        return (
            <div className="details-page">
                <Title title={title} isShowBack={true} />
                <div className="detail-main">
                    <div className="about boss-msg">
                        <div className="lists" >
                            <div className="item-left pic-head" style={{ background: `url('${teacherImgUrl}')` }}></div>
                            <div className="item-right-box no-border"><div className="item-job">{title}</div>
                                <div className="item-right">
                                    <div className="item-name">{name}</div>
                                    <div className="item-nums">招募人数{nums - now_nums}人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-box">
                        <div className="about">职位详情:</div>
                        <div className="about-jobs">
                            {detail}
                        </div>
                    </div>
                    <div className="msg-hint">
                        <div className="boss-phone-box"><div className="phone-left">联系人：</div><div className="phone">{linkman}</div></div>
                        <div className="boss-phone-box"><div className="phone-left">电话：</div><div className="phone">{phone}</div></div>
                        <div className="boss-phone-box"><div className="phone-left">积分奖励：</div><div className="phone">{award}</div></div>
                    </div>
                    <div className="join" onClick={this.joinJobs}>立即报名</div>
                </div>
            </div>
        );
    }
}
export default Details