import React, { useContext } from 'react';
import Address from './Address';
import AddressContext from '../../context/address/AddressContext';

//pull our global state in


const AddressList = () => {

    const { contacts } = useContext(AddressContext);
  
    return (
        <div> 
            {
                contacts.map(contact => (
                    <Address contact={contact} key={contact.id} />
                ))

            }
        </div>
    )
}

export default AddressList
