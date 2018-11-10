import React from 'react';

export default (props) => {
    return(
        <div className="row text-center mb-4">
            <div className="col-md-3 offset-md-2 future-predictions animated slideInUp faster">
            <span className="regular-text">{ props.day[0] },{ props.date[0] }</span>
            <img src={ props.img[0] } alt="forecast image" />
            <p><span className="f-high regular-text">{ props.tempHigh[0] }&deg;</span>&nbsp;<span className="f-low regular-text">{ props.tempLow[0] }&deg;</span></p>
            </div>
            <div className="col-md-3 offset-md-1 future-predictions animated slideInUp fast">
            <span className="regular-text">{ props.day[1] },{ props.date[1] }</span>
            <img src={ props.img[1] } alt="forecast image" />
            <p><span className="f-high regular-text">{ props.tempHigh[1] }&deg;</span>&nbsp;<span className="f-low regular-text">{ props.tempLow[1] }&deg;</span></p>
            </div>
            <div className="col-md-3 offset-md-1 future-predictions animated slideInUp">
            <span className="regular-text">{ props.day[2] },{ props.date[2] }</span>
            <img src={ props.img[2] } alt="forecast image" />
            <p><span className="f-high regular-text">{ props.tempHigh[2] }&deg;</span>&nbsp;<span className="f-low regular-text">{ props.tempLow[2] }&deg;</span></p>
            </div>
            <div className="col-md-3 offset-md-1 future-predictions animated slideInUp slow">
            <span className="regular-text">{ props.day[3] },{ props.date[3] }</span>
            <img src={ props.img[3] } alt="forecast image" />
            <p><span className="f-high regular-text">{ props.tempHigh[3] }&deg;</span>&nbsp;<span className="f-low regular-text">{ props.tempLow[3] }&deg;</span></p>
            </div>
        </div>
    );
}