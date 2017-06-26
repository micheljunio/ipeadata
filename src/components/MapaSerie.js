import React, { Component } from "react";
import Choropleth from "react-leaflet-choropleth";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapaSerie extends Component {
  state = {
    lat: 37.8,
    lng: -96,
    zoom: 4
  };

  render() {
    const style = {
      fillColor: "#F28F3B",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.5
    };

    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>"
          url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
        />
        {/*<Choropleth
          data={{ type: "FeatureCollection", features: statesData }}
          valueProperty={feature => feature.properties.value}
          scale={["#b3cde0", "#011f4b"]}
          steps={7}
          mode="e"
          style={style}
          onEachFeature={(feature, layer) =>
            layer.bindPopup(feature.properties.label)}
        />*/}
      </Map>
    );
  }
}

export default MapaSerie;