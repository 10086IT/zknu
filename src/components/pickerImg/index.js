import React from 'react';
import { ImagePicker } from 'antd-mobile';

export default class ImagePickerExample extends React.Component {
  state = {
    files: [],
  };
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  };
  onTabChange = (key) => {
    console.log(key);
  };
  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          length="1"
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 1}
          disableDelete
        />
      </div>
    );
  }
}