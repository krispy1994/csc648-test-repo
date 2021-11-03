import React, { Component } from "react";
import Switch from "react-switch";
class MaterialDesignSwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <div className="example">
          <h2>Swicth</h2>
          <label htmlFor="material-switch">
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={78}
              className="react-switch"
              id="material-switch"
            />
          </label>
        </div>
      )
    }
  }
  export default MaterialDesignSwitch;