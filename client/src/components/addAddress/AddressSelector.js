import React, { Fragment, useContext } from 'react';
import AddressContext from '../../context/address/addressContext';

const AddressSelector = () => {

    const addressContext = useContext(AddressContext); 

    const {
      addresses,
      address,
      setAddress,
    } = addressContext;

    const handleAddressSelect = e => {
        const addressArray = e.target.value.split(',');
        setAddress(addressArray);
      }

    if(addresses.length > 0)
    return (
        <div>
            <label htmlFor="address">Choose The Address From The List</label>
              <input onSelect={e => handleAddressSelect(e)} value={address} type="data-list" name="address" list="address-array"></input>
                <datalist id="address-array">
                    {addresses.map((address) => {
                    return (
                        <option value={address} key={address}></option>
                    );
                    })}
                </datalist>
        </div>
    )
    return <Fragment></Fragment>
}

export default AddressSelector;
