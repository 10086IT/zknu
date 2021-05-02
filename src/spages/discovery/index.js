import React from 'react'
import './style.css'
import TabBar from '../../components/tabbar';
//学生兼职任务详情

const lists_jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1, 1]
class Discovery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleSeacch = () => {

    }
    render() {
        return (
            <div className="discovery-pages">
                <div className="discovery-search-header">
                    <div className="discovery-search-title">发现</div>
                    <div className="discovery-header-search">
                        <input
                            className="discovery-user-search"
                            type="text"
                            placeholder="请输入您要查询的用户"
                            value="1"
                            onChange={this.handleSeacch}
                        />
                        <div className="submit">搜索</div>
                    </div>
                </div>
                <div className="discovery-main">
                    <div className="integral-box">
                        <div className="integral integral-click">积分榜</div>
                        <div className="integral">热门任务</div>
                    </div>
                    <div className="integral-lists">

                        {lists_jobs.map((item, index) => {
                            return (
                                <div className="item-integral" key="item">
                                    <div className="integral-left">
                                        <div className="integral-at">{index + 1}</div>
                                        <div className="integral-box-msg">
                                            <div className="integral-username">小明{index}</div>
                                            <div className="integral-username">{20 - index}积分</div>
                                            <div className="integral-username">累计任务次数：{10 - index}次</div>
                                        </div>

                                    </div>
                                    <div className="integral-pic"></div>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <TabBar />

            </div>
        );
    }
}

export default Discovery;
