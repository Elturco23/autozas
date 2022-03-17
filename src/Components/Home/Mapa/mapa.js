import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './mapa.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='container-mapa'>
        <h3 className='titulo-mapa'>Talleres Cercanos a ti</h3>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDTSboVvI6MN2qeP89lrSldb17uSWJ3kxY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;