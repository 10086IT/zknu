import React from 'react';
import './style.css'
import axios from 'axios'
export default class MyLoadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: ''
    }
  }

  componentDidMount() {

  }
  load() {

  }
  render() {
    return (
      <div className="uploadImg">
        <input type="file" onChange={this.load.bind(this)} />
        <img className="inloadImg" src={this.state.imgurl} alt="img" />
      </div>

    )
  }



}