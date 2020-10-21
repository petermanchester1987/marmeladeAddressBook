import React, { Fragment, useContext } from 'react';
import AddressContext from '../../context/address/addressContext';

const AddressSelector = () => {

    const addressContext = useContext(AddressContext); 

    const {
      addresses
    } = addressContext;

    if(addresses.length > 0)
    return (
        <div>
            <label htmlFor="address">Choose The Address</label>
              <input  type="data-list" name="address" list="address-array"></input>
              <datalist id="address-array">
                
                </datalist>
        </div>
    )
    return <Fragment></Fragment>
}

export default AddressSelector;
