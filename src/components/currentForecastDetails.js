import React from 'react';

export default (props) => {
    return(
        <div className="col-sm-6 pt-3">
            <div className="row">
                <div className="col-sm-4">
                    <img src={ props.imgsrc } alt="weather-icon" className="current-icon animated fadeInLeft"/>
                </div>
                <div className="col-sm-4">
                    <h1 className="regular-text animated fadeInLeft">{props.temp}&deg;c</h1>
                </div>
                <div className="col-sm-4">
                    <div className="col-xs-12"><h6 className="light-text animated fadeInLeft">High: { props.hightemp }&deg;c</h6></div>
                    <div className="col-xs-12"><h6 className="light-text animated fadeInLeft">Low: { props.lowtemp }&deg;c</h6></div>
                </div>
                <div className="container pt-4">
                    <h4 className="light-text animated fadeInLeft">{ props.desc }</h4>
                </div>
            </div>
        </div>
    );
}