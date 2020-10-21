import React from 'react';
import { Fragment } from 'react';
import './App.css';
import AddPostcode from './components/addAddress/AddPostcode';
import AddressSelector from './components/addAddress/AddressSelector';
import AddAddress from './components/addAddress/AddAddress';
import Navbar from './components/layout/Navbar';
import AddressList from './components/showAddress/AddressList';


const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1>Add An Address</h1>
        <AddPostcode />
        <AddressSelector />
        <AddAddress />
      </div>
      <div className="container">
        <AddressList />
      </div>
    </Fragment>
  );
}

export default App;
