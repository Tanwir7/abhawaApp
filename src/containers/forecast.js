import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import CurrentForecastDetails from '../components/currentForecastDetails';
import CurrentAdditionalDetails from '../components/currentAdditionalDetails';
import ForecastCards from '../components/forecastcards';
import Chart from '../components/chart';


class Forecast extends Component {
    
    renderCurrent(info) {
        const city = info.city.name;
        const country = info.city.country;
        const current_temp = Math.round((info.list[0].main.temp) - 273.15);
        const temp_max = Math.round((info.list[0].main.temp_max) - 273.15);
        const temp_min = Math.floor((info.list[0].main.temp_min) - 273.15);
        const conditions = info.list[0].weather[0].description;
        const img_src = `http://openweathermap.org/img/w/${info.list[0].weather[0].icon}.png`;
        const humidity = info.list[0].main.humidity;
        const pressure = Math.round(info.list[0].main.pressure);
        const sea_level = Math.round(info.list[0].main.sea_level);
        const windspeed = info.list[0].wind.speed;
        const img_background = `${info.list[0].weather[0].main}.jpg`;

        return(
            <div className="container mb-4 mt-4">
                <Helmet
                    style={[{
                        "cssText": `
                            html {
                                background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("../img/${ img_background }") no-repeat center center fixed !important;
                                -webkit-background-size: cover !important;
                                -moz-background-size: cover !important;
                                -o-background-size: cover !important;
                                background-size: cover !important;
                            }
                            .current_date{
                                visibility:visible;
                            }
                        `
                    }]}
                />
                <h2 className="regular-text col-xs-12">{ city }, { country }</h2>
                <div className="row">
                        <CurrentForecastDetails temp={ current_temp } hightemp={ temp_max } lowtemp={ temp_min } imgsrc={ img_src } desc={ conditions }/>
                        <CurrentAdditionalDetails humid={ humidity } pressure= { pressure } sealevel={ sea_level } speed={ windspeed } />
                </div>
            </div>
        );
    }

    renderForecast(info){
        console.log(info);

        let futureTempHigh=[];
        let futureTempLow=[];
        let futureIco=[];
        let futureDate=[];
        let futureDay=[];
        
        let i = 8;
        for(let f = 1; f<=4; f++){
            const fTempHigh = Math.round((info.list[i].main.temp_max) - 273.15);
            futureTempHigh.push(fTempHigh);
            const fTempLow = Math.round((info.list[0].main.temp_min) - 273.15);
            futureTempLow.push(fTempLow);
            const fIcon = `http://openweathermap.org/img/w/${info.list[i].weather[0].icon}.png`;
            futureIco.push(fIcon);

            const fDate = info.list[i].dt_txt;
            const forecastDate = fDate.substring(8, 10);
            const fDay = String(moment(fDate.substring(0, 10)));
            const forecastDay = fDay.substring(0, 3);
            futureDate.push(forecastDate);
            futureDay.push(forecastDay);

            
            i = i + 8;
        }
        console.log(futureDay);


        return(
            <ForecastCards day={ futureDay } date={ futureDate } img={ futureIco } tempHigh={ futureTempHigh } tempLow={ futureTempLow }/>
        );
    }

    renderChart(info) {

        const name = info.city.name;
        const temps = info.list.map(weather => weather.main.temp);
        const pressures = info.list.map(weather => weather.main.pressure);
        const humids = info.list.map(weather => weather.main.humidity);

        return (
            <div className="row">
                <Chart data={temps} color="red" name="Temperature"/>
                <Chart data={humids} color="orange" name="Humidity"/>
                <Chart data={pressures} color="blue" name="Pressure"/>
            </div>
        );

    }


    render(){
        if(!this.props.weather){
            return (
                <div className="jumbotron welcome animated fadeIn slow">
                    <h1 className="display-4">abhawa</h1>
                    <p className="lead">Get a five day forecast of your favourite cities</p>
                    <p className="lead">Powered by OpenWeather api</p>
                </div>
            );
        }

        return(
            <div>
                <div className="row">
                    {this.renderCurrent(this.props.weather)}
                </div>
                <div class="container pt-4">
                    <h5 className="text-center mb-3 light-text animated fadeInUp">upcoming forecasts</h5>
                    {this.renderForecast(this.props.weather)}
                </div>
                <div className="container pt-4">
                    <h5 className="text-center mb-3 light-text animated fadeInUp">trends</h5>
                    {this.renderChart(this.props.weather)}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps)(Forecast);