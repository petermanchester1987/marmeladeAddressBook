import React, { useCallback, useContext, useState } from 'react';
import AddressContext from '../../context/address/addressContext';
import { debounce } from 'throttle-debounce';

const AddPostcode = () => {

    //Bringing in context into the component
    const addressContext = useContext(AddressContext); 

     // Destructuring the context
    const { 
        searchPostcode,
        setPostcode,
        postcodes
    } = addressContext;

   /* using useCallback hook to debounce the postcode search
    Didn't realise until this that it was slightly different to debounce 
    or throttle a functional component than a class based (because each 
    render it has a new state ) */

    const debounceFunc = 
    useCallback(debounce(1000, (nextValue) => searchPostcode(nextValue)),[]);

    const handlePostcodeChange = e => {
      const nextValue = e.target.value;
      debounceFunc(nextValue);
      setPostcode(nextValue);
    }

    return (
        <div>
           <input
          type="text"
          name="quickform"
          list="postcode-array"
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
