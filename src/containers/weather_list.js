import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
class WeatherList extends Component {
  //cityData is essentially each city in the array 
  renderWeather(cityData){
    const name = cityData.city.name;
    //Inside each city we are mapping over an array called list which has the forecast.
    //Weather is the argument which is essentially forecast for each day
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data ={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
      </tr>
    );
  }

	render () {
		return (
         <table className = "table table-hover">
           <thead>
             <tr>
               <th>City</th>
               <th>Temperature</th>
               <th>Pressure</th>
               <th>Humidity</th>
             </tr>
           </thead>
           <tbody>
             {this.props.weather.map(this.renderWeather)}
           </tbody>
         </table>
		)
	}
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);