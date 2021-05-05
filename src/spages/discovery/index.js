import React from 'react'
import './style.css'
import TabBar from '../../components/tabbar';
import Integral from './components/integral'
//学生兼职任务详情

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
                        <div className="integral">推荐</div>
                        <div className="integral integral-click">积分榜</div>
                        <div className="integral">热门任务</div>
                    </div>
                    <Integral />
                </div>
                <TabBar />

            </div>
        );
    }
}

export default Discovery;
