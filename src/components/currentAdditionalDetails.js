import React from 'react';

export default (props) => {
    return(
        <div className="col-sm-6 text-right">
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="regular-text animated fadeInRight">{props.sealevel}</h3>
                    <p className="light-text animated fadeInRight">Sea Level</p>
                </div>
                <div className="col-sm-6">
                    <h3 className="regular-text animated fadeInRight">{props.pressure}hPa</h3>
                    <p className="light-text animated fadeInRight">Pressure</p>
                </div>
                <div className="col-sm-6">
                    <h3 className="regular-text animated fadeInRight">{props.humid}%</h3>
                    <p className="light-text animated fadeInRight">Humidity</p>
                </div>
                <div className="col-sm-6">
                    <h3 className="regular-text animated fadeInRight">{props.speed}</h3>
                    <p className="light-text animated fadeInRight">Wind Speed</p>
                </div>
            </div>
        </div>
    );
}