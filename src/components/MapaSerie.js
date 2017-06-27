import React, { Component } from "react";
import Choropleth from "react-leaflet-choropleth";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import chroma from 'chroma-js'
import {statesData} from '../data/Coord.Mapa'

        class MapaSerie extends Component {
    state = {
        lat: -15.7801,
        lng: -47.9292,
        zoom: 4,
    };

    render() {
        

        const position = [this.state.lat, this.state.lng];
        const geojson = statesData;
        return (
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>"
                        url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                        />
                    <Choropleth
                        data={geojson}
                        valueProperty={(feature) => feature.properties.density}
                        steps={5}
                        mode="q"
                        onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.name)}
                        scale={['gray', 'red', 'green']}
                        />
                </Map>
                );
    }
}

export default MapaSerie;