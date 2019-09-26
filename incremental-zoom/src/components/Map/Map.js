import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      backgroundColor: "white",
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {text}
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11.2,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChange={(data) => {
            console.log('ON CHNAGE', data);
          }}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
          <AnyReactComponent lat={60.955413} lng={3.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
