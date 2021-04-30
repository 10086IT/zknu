import React, { Component } from 'react';
import './style.css'
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }
  goLastPage = () => {
    window.history.go(-1)
    localStorage.removeItem('iden')
    console.log('1')
  }
  render() {
    const { title, isShowBack = false } = this.props
    return (
      <div className="header">
        {isShowBack && <div className="header-back" onClick={this.goLastPage}></div>}
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default Title;
