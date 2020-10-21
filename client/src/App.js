import React from 'react';
import { Fragment } from 'react';
import './App.css';
import AddPostcode from './components/address/AddPostcode';
import AddAddress from './components/address/AddAddress';
import Navbar from './components/layout/Navbar';


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <AddPostcode />
        <AddAddress />
      </div>
    </Fragment>
  );
}

export default App;
