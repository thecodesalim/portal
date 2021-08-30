import React, { Component } from "react";

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "Nigeria", states: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div style={{ margin: "10px" }}>
        <span style={{ marginRight: "10px" }}> State of Orgin</span>
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        />
      </div>
    );
  }
}
