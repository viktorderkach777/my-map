import React, { Component } from "react";
import DetailedInfo from "./detailedInfo";
import Dashboard from "./dashboard";
import Tile from "./tile";




export default class ForecastTiles extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataWeath:[]
     }
  }

  // componentDidMount() { 
  //   const { forecasts, cityData } = this.props;
  //   const tiles = Object.values(this._groupByDays(forecasts));
       
  //   const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
  //   let dataWeath2 = [];
  //   const weathArr = () =>forecastTiles.map(element=>{      
  //     dataWeath2.push(this._getInfo2(element))
  //   });
  //   this.setState(()=>{
  //     this.dataWeath=dataWeath2.slice()      
  //   })

  // }


  // Filters the data by date and returns an Object containing a list of 5-day forecast.
  _groupByDays = data => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0, 10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  // Returns week of the day
  _getDayInfo = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  _getDayInfo2 = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(data.dt * 1000).getDay()];
  };

  // Fetches the icon using the icon code available in the forecast data.
  _getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;

  _getHour = time => time ? new Date(time).getHours() : new Date().getHours();
  _getDate = date => date ? new Date(date).getDate() : new Date().getDate();

  //const getIcon = data => `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  // Gets the Minimum, Maximum and Avg Humidity temperatures of the day.
  _getInfo = (data, min = [], max = [], humidity = []) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      humidity.push(item.main.humidity);
    });

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    };

    // Gets the day's average humdity
    const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);

    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${minMax.max}°C`}</strong> / {`${minMax.min}°C`}
        </div>
        <div className="more-info">
          {`Avg. Humidity: ${avgHumdity}%`}
        </div>
      </div>
    );
  };

  avgArr = (arr) => {
    return Math.round(arr.reduce((curr, next) => curr + next) / arr.length);
  };

  _getInfo2 = (data, min = [], max = [], humidity = [], windSpeed = [], pressure = [], dataTime = []) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      humidity.push(item.main.humidity);
      windSpeed.push(item.wind.speed);
      pressure.push(item.main.pressure);
     
      dataTime.push({
        hour: this._getHour(item.dt * 1000),
        icon: item.weather[0].icon,
        description: item.weather[0].description
      });
    });

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    };

    const avgHumdity = this.avgArr(humidity);
    const avgWindSpeed = this.avgArr(windSpeed);
    const avgPressure = this.avgArr(pressure);

    const weatherData = dataTime.length > 7 ? dataTime[4] : dataTime[0];
    return (
      {
        max: minMax.max,
        min: minMax.min,
        humidity: avgHumdity,
        windSpeed: avgWindSpeed,
        avgPressure,
        day: this._getDayInfo(data),
        description: weatherData.description,
        hour: weatherData.hour,
        icon: weatherData.icon        
      }     
    );
  };

  // Toggles accordion to display hourly weather information
  _showMoreInfo = (index) => {
    const elm = this.refs[`div-${index}`];
    const expandedElment = document.querySelector(".expanded");

    elm.classList.add("expanded");
    expandedElment !== null && expandedElment.classList.remove("expanded");
  }

  render() {

    const { forecasts, cityData } = this.props;
    const tiles = Object.values(this._groupByDays(forecasts));
    console.log("tiles", tiles);
    // Edge case:
    // When the webservice returns data for 6 calendar days during evenings as a result of offset,
    // this ensures that we are showing only 5-days of forecast.
    const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;
    console.log("forecastTiles", forecastTiles);
    console.log("cityData", cityData);
    // let min = [];
    // let max = [];
    // let humidity = [];
    // forecastTiles.map((item => {
    //   console.log("getInfo", this._getDayInfo(item, min, max, humidity))
    // }));
    // console.log("humidity", min, max, humidity);
    // let el = {
    //   icon: null,
    //   day: null
    // }

    //let iconArray = [];
    // forecastTiles.forEach((item, idx) => (
    //   idx === 0 ? (
    //     console.log("0", item),
        
    //     console.log("el", this._getDayInfo2(item[0])),       
    //     iconArray.push(         
    //       {
    //         ...el,
    //         icon: item[0].weather[0].icon,
    //         day: this._getDayInfo2(item[0])
    //       }
    //     )
    //   ) : (

    //       item.forEach((elem, id) => (
    //         id !== 5 ? null : (
    //           //iconArray.push(elem.weather[0].icon),
    //           console.log("el2", id, elem, elem.weather[0].icon)
    //           , console.log("el222", this._getDayInfo2(elem)),
    //           iconArray.push(
    //             //item[0].weather[0].icon
    //             {
    //               ...el,
    //               icon: elem.weather[0].icon,
    //               day: this._getDayInfo2(elem)
    //             }
    //           )
    //         )
    //       ))
    //     )

    // ));
    // console.log(iconArray);

    forecastTiles.forEach(element => {
      console.log("this._getInfo2(element)", this._getInfo2(element))
    });

     let dataWeath = [];
    const weathArr = () =>forecastTiles.map(element=>{ 
      let a =   this._getInfo2(element)
      console.log("a", a);
      //<Tile/>
      //dataWeath.push(this._getInfo2(element))
      //console.log("this._getInfo3(element)", this._getInfo2(element))
     
    });
    weathArr();
     //console.log("dataWeath", dataWeath);

    


    return (
      <div className="forecast-tiles">
        <Dashboard forecast={dataWeath} cityData={cityData}/>
        {
          forecastTiles.map(element=>(
            //let a =   this._getInfo2(element)
            <div key={element.day}>
              {
                 //(this._getInfo2(element)).hour
                 //a=this._getInfo2(element)
                 <Tile el = {this._getInfo2(element)}/>
              }
            </div>
            //console.log("a", a);
            //<Tile/>
            //dataWeath.push(this._getInfo2(element))
            //console.log("this._getInfo3(element)", this._getInfo2(element))
           
          ))
        }
        {forecastTiles.map((item, i) => (
          <div
            className={`forecast-tile tile-${i}`}
            key={i}
            ref={`div-${i}`}
            onClick={() => { this._showMoreInfo(i) }}
          >
            <div className="primary-info">
              <div className="icon">
                <img src={this._getIcon(item)} />
                {this._getDayInfo(item)}
              </div>
              {this._getInfo(item)}
            </div>
            <div className="detailed-info" key={i}>
              <DetailedInfo data={item} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
// TODO: Add defaultProps and PropType validations
