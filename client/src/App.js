import React from 'react';
import { Fragment } from 'react';
import './App.css';

// bringing in state wrapper from context
import AddressState from './context/address/AddressState';

import AddPostcode from './components/addAddress/AddPostcode';
import AddressSelector from './components/addAddress/AddressSelector';
import Navbar from './components/layout/Navbar';
import AddressList from './components/showAddress/AddressList';
import AutoAddress from './components/addAddress/AutoAddress';
import ShowManualButton from './components/addAddress/ShowManualButton';



const App = () => {


  return (
    /* Wrap everything in a state provider. */
    
       <AddressState>
          <Fragment>
            <Navbar />
            <div className="container">
              <h1>Add An Address</h1>
              <AddPostcode />
              <ShowManualButton />
              <AddressSelector />
              <AutoAddress />
            </div>
            <div className="container">
              <AddressList />
            </div>
          </Fragment>
        </AddressState>
  );
}

export default App;
