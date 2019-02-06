import React, { Component } from "react";

class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange }
    } = this.props;
    let imageFile = e.target.files[0];
    let image = {};
    for (let key in imageFile) {
      image[key] = imageFile[key];
    }
    onChange(image);
  }

  render() {
    const {
      input: { value }
    } = this.props;
    const { input, label, required, meta } = this.props; 
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  };
};

export default FieldFileInput;