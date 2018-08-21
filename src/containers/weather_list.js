import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  //cityData is essentially each city in the array 
  renderWeather(cityData){
    const name = cityData.city.name;
    //Inside each city we are mapping over an array called list which has the forecast.
    //Weather is the argument which is essentially forecast for each day
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td> <Chart data={temps} color="orange" units="C" /> </td>
        <td> <Chart data={pressure} color="blue" units="hPa" /> </td>
        <td> <Chart data={humidity} color="black" units="%" /> </td>      
      </tr>
    );
  }

	render () {
		return (
        <table className = "table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%) </th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
		);
	}
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);