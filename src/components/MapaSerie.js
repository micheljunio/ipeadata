import React from 'react';
import fetch from 'isomorphic-fetch';
import { Map, TileLayer, Choropleth, InfoControl } from 'react-leaflet-wrapper';
import {statesData} from "../data/Coord.Mapa"
import "../css/mapa.css";

const STATES_URL = 'dist/states.json';
const date=statesData
console.log(date);
export default class MapaSerie extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      states: null
    };
  }

  componentWillMount () {
    fetch(STATES_URL)
    .then(response => response.json())
    .then(geojson =>  this.setState({ states: geojson }));
  }

  render() {
    const { state } = this.state;
    //console.log(statesData);
    return (
      <Map
        width='100%'
        height={500}
        center={[ -15.7801, -47.9292]}
        zoom={4}
        >
        <TileLayer />
        <InfoControl position='topright'> 
          <Choropleth
            data={date}
            legend='bottomright'
            legendClass='info legend'
            valueProperty='density'
            steps={8}
            buckets={[0, 10, 20, 50, 100, 200, 500, 1000, 'inf']}
            colors={['#FFEDA0', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A', '#E31A1C', '#BD0026', '#800026']}
            infoContent={feature => InfoContent(feature)}
            onClick={(feature, layer, map) => map.fitBounds(layer.getBounds()) }
            onMouseover={(feature, layer, map) => layer.bringToFront() }
            style={{
              weight: 2,
              opacity: 1,
              color: '#EE9A49',
              dashArray: 3,
              fillOpacity: 0.7
            }}
            highlightStyle={{ 
              weight: 5, 
              color: '#666', 
              dashArray: '', 
              fillOpacity: 0.7  
            }}
          />
        </InfoControl>
      </Map>
    );
  }
}

function InfoContent (feature) {
  return (
    <div>
      <h4>Densidade da População do Brasil</h4>
      { 
        feature ? 
          <div>
            <b>{feature.properties.name}</b>
            <br />
            {feature.properties.density} pessoas / mi<sup>2</sup>
          </div>
            : 
              <span>Passe o mouse sobre um estado...</span>
       }
     </div>
  );
}