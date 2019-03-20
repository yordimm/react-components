import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HotelCard from './components/HotelCard';
import NavBar from './components/NavBar';
import FilterContainer from './components/FilterContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <FilterContainer />
            </div>
            <div className="col-9">
              <HotelCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
