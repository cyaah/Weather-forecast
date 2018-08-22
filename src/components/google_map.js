import  React, { Component } from 'react';


class GoogleMap extends Component {
  componentDidMount() {
  	//Used reacts ref system in order to get direct dom reference to the div below
  	new google.maps.Map(this.refs.map, {
  		zoom: 12,
  		center: {
  			lat: this.props.lat,
  			lng: this.props.lon
  		}
  	});
  }

  render () {
  	return <div ref="map" />;
  }
}

export default GoogleMap;