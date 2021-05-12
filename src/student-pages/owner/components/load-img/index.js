import { Fragment, Component } from 'react'

class LoadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  handleImgUpload = async (event) => {

    let files = event.target.files


    let url = window.URL.createObjectURL(files[0])

    await this.setState({
      imgURl: url
    })

    console.log(url)
  }
  render() {
    return (
      <Fragment>
        <div className="load-img">

          <input
            type="file"
            accept='.jpeg,.png'
            onChange={(event) => { this.handleImgUpload(event) }}
          />
          <img src={this.state.imgURl} alt="s" />
        </div>
      </Fragment>
    );
  }
}

export default LoadImg;