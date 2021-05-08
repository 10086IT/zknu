import React, { Component } from 'react';
import './style.css'
class OwnerTilte extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }
  }
  goLastPage = () => {
    const { url } = this.props
    if (url) {
      localStorage.removeItem('iden')
      window.location.href = url
      return
    }
    window.history.go(-1)
  }
  render() {
    const { title, isShowBack = false } = this.props
    return (
      <div className="b-header">
        {isShowBack && <div className="b-header-back" onClick={this.goLastPage}></div>}
        <div className="b-title">{title}</div>
      </div>
    );
  }
}

export default OwnerTilte;
