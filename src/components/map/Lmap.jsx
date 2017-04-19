import React from 'react';
import { Map, LayerGroup, Circle, Marker, Popup } from 'react-leaflet'
import './leaflet.css';
import ExWMSTileLayer from './ExWMSTileLayer';
import { connect } from 'react-redux';

class Lmap extends React.Component {
  render () {
    const { center } = this.props;
    var circle = this.props.data.map((li,i) => {
      return <Circle center={li.latlng} key={i} color="blue" fillColor="green" radius={1000} />
    });
    var myIcon = L.icon({
        iconUrl: './images/marker-icon.png',
        iconSize: [24, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -34]
    });
    var marker = this.props.data.map((li,i) => {
      return <Marker position={li.latlng} icon={myIcon} key={i}>
                <Popup>
                  <span>{li.name}</span>
                </Popup>
              </Marker>
    });
    return  <Map style={{height:'500px', border: '1px solid #e0e0e0'}} center={center} zoom={10}>
              <ExWMSTileLayer type="Geoq.Normal.Map" options={{ maxZoom:18,minZoom:3}}/>
              <LayerGroup>
                 {circle}  
                 {marker}           
              </LayerGroup>
            </Map>
    
  }
};

function mapStateToProps(state) {
  return {
    center: state.map.center
  }
};
Lmap = connect(
  mapStateToProps
)(Lmap);

export default Lmap;