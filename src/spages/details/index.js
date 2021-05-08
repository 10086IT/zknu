import React, { Component } from 'react'
import Title from '../../components/Title'
import { checklogin } from '../../net/api'
import './style.css'
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job_dos: "1、身体健康，做事认真，无传染病和犯罪记录\n2、年龄16- 30周岁，男女不限，无须经验\n3、持有本人有效身份证原件；\n 2、住宿条件：免费提供4 - 6人间，有空调，洗衣机，独立卫生间，免费宽带；\n3、生活设施：生活区设有平价超市、网吧、水果店、ATM、快递收发点、医务室等"
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="details-page">
                <Title title={"图书管理员"} isShowBack={true} />
                <div className="detail-main">
                    <div className="about boss-msg">
                        <div className="lists" >
                            <div className="item-left pic-head"></div>
                            <div className="item-right-box no-border"><div className="item-job">图书管理员</div>
                                <div className="item-right">
                                    <div className="item-name">王老师</div>
                                    <div className="item-nums">招募人数2人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-box">
                        <div className="about">职位详情:</div>
                        <div className="about-jobs">
                            {this.state.job_dos}
                        </div>
                    </div>
                    <div className="msg-hint">
                        <div className="boss-phone-box"><div className="phone-left">联系人：</div><div className="phone">倪鹏博</div></div>
                        <div className="boss-phone-box"><div className="phone-left">电话：</div><div className="phone">18336579969</div></div>
                        <div className="boss-phone-box"><div className="phone-left">积分奖励：</div><div className="phone">2</div></div>
                    </div>
                    <div className="join">立即报名</div>
                </div>
            </div>
        );
    }
}
export default Details