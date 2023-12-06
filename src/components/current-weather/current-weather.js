
import React from 'react';
import './current-weather.css'
import {Card} from "react-bootstrap";
const CurrentWeather = ({data}) => {
      return (
 <div className="main-container">
        <Card className="weather">
            <Card.Body>
                <div className="top d-flex justify-content-between align-items-center">
                    <div>
                        <p className='city'>{data.city}</p>
                        <p className='weather-description'>{data.weather[0].description}</p>
                    </div>
                    <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
                </div>
            </Card.Body>
            <Card.Body className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°C</p>
                    <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                     <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                         <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                     <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                         <span className='parameter-value'>{data.wind.speed}m/s</span>
                    </div>
                     <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                         <span className='parameter-value'>{data.main.humidity} %</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
 </div>
    );
}


export default CurrentWeather;