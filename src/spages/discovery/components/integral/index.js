import React, { Component } from 'react';
const lists_jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

class Integral extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="integral-lists">
                {lists_jobs.map((item, index) => {
                    return (
                        <div className="item-integral" key="item">
                            <div className="integral-left">
                                <div className="integral-at">{index + 1}</div>
                                <div className="integral-box-msg">
                                    <div className="integral-username">小明{index}</div>
                                    <div className="integral-username">积分：{20 - index}</div>
                                    <div className="integral-username">累计任务次数：{10 - index}次</div>
                                </div>

                            </div>
                            <div className="integral-pic"></div>
                        </div>
                    )
                })}
                <div className="list-more">加载更多</div>

            </div>);
    }
}

export default Integral;