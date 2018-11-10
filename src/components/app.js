import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import Forecast from '../containers/forecast';



export default class App extends Component {

  render() {

    const TodayDate= moment().format("dddd, MMMM Do YYYY");

    return (
      <div>
        <div className="row mb-2">
          <div className="col-sm-6 light-text current_date">{ TodayDate }</div>
          <SearchBar />
        </div>
        <Forecast />
      </div>
    );
  }
}
