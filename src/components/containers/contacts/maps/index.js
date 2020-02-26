import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";

class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{ lat: 51.507351, lng: -0.127758 }}
      >
        <Marker title={"Carphone Warehouse UK"} />
        <Marker
          position={{ lat: 52.520008, lng: 13.404954 }}
          title={"Carphone Warehouse GR"}
          name={"Carphone"}
        />
        <Marker
          position={{ lat: 48.918282, lng: 24.719971 }}
          title={"Carphone Warehouse UA"}
        />
        <Marker
          position={{ lat: 48.8588897, lng: 2.32004103 }}
          title={"Carphone Warehouse FR"}
        />
        <Marker
          position={{ lat: 40.4167047, lng: -3.7035825 }}
          title={"Carphone Warehouse SP"}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCtXq_7sxBTBk0k8Ijtpz-3E8F-WpvCYNo&callback"
})(MapContainer);
