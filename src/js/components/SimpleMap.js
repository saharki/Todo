
import React from "react"
import GoogleMapReact from 'google-map-react'

export default class SimpleMap extends React.Component {
  state = {
    center: [60.938043, 30.337157],
    zoom: 9,
  };

  _onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,      
    });
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
         this.setState({
          center: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          }
        });
      }
    )
  }

  render() {
    return (
       <GoogleMapReact
        onChange={this._onChange}
        center={this.state.center}
        zoom={this.state.zoom}>
        <div className="place" lat={this.state.center.lat} lng={this.state.center.lng}>MyPlace</div>
      </GoogleMapReact>
    );
  }
}
