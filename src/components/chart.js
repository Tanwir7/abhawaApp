import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    return(
        <div className="col-md-3 ml-3 mr-3 pt-3 pb-3 trends mx-auto animated slideInUp slower">
                <Sparklines height={120} width={180} data={props.data}>
                    <SparklinesLine color={props.color} />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
            <div className="text-center chart-prop-name light-text">{props.name}</div>
        </div>
    );
}