import React, { useCallback, useContext } from 'react';
import AddressContext from '../../context/address/addressContext';
import { debounce } from 'throttle-debounce';
import { SHOW_ADDRESS_SELECTOR } from '../../context/constants';

const AddPostcode = () => {

    //Bringing in context into the component
    const addressContext = useContext(AddressContext); 

     // Destructuring the context
    const { 
        postcode,
        searchPostcode,
        setPostcode,
        searchAddress,
        postcodes,
        showAuto,
        showAddressSelector
    } = addressContext;

   /* using useCallback hook to debounce the postcode search with postcodes.io
    Didn't realise until this that it was slightly different to debounce 
    or throttle a functional component than a class based (because each 
    render it has a new state ) */

    const debounceFunc = 
    useCallback(debounce(1000, (nextValue) => searchPostcode(nextValue)),[]);

    //Decided to do the same thing to send an API call to getaddress.io
    // thought I should use both 
    const debounceAddressFunc = 
    useCallback(debounce(3000, (searchablePostcode) => searchAddress(searchablePostcode)),[]);

    const handlePostcodeChange = e => {
      const nextValue = e.target.value;
      debounceFunc(nextValue);
      setPostcode(nextValue);
      showAddressSelector();

      //getting rid of annoying postcodes.io space
      const searchablePostcode = nextValue.replace(/\s+/g, '')

      debounceAddressFunc(searchablePostcode);
      showAuto();
    }

    return (
        <div>
           <input
          type="text"
          name="quickform"
          list="postcode-array"
          value={postcode}
          placeholder="Enter Postcode"
          onChange={e => handlePostcodeChange(e)}
        /> 
         {postcodes.result && (
            <datalist id="postcode-array">
            {postcodes.result.map((postcode) => {
              return (
                <option value={postcode} key={postcode}></option>
              );
            })}
          </datalist>
          )}
  
        </div>

   
    )
}

export default AddPostcode
