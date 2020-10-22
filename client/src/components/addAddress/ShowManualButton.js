import React, { Fragment, useContext } from 'react';
import AddressContext from '../../context/address/AddressContext';


const ShowManualButton = () => {

    //Bringing in context into the component
    const addressContext = useContext(AddressContext); 

     // Destructuring the context methods I need
    const { 
        seeAuto,
        showAuto,
        hideAuto,
        seeAddressSelector,
        hideAddressSelector
    } = addressContext;

    const toggleAuto = () => {
        if(!seeAuto && !seeAddressSelector) {
            showAuto();
            hideAddressSelector();
        } else {
            hideAuto();
        }
    }


    if (!seeAuto)
    return (
        <div>
            <button onClick={toggleAuto} className="btn-light p my">Or Fill Out Manually</button>
        </div>
    )
else
    return ( <Fragment></Fragment> )

}

export default ShowManualButton;
