import React, { useContext } from 'react';
import AddressContext from '../../context/address/addressContext';


const Address = ({ contact }) => {

     //Bringing in context into the component
     const addressContext = useContext(AddressContext); 

     // Destructuring the context methods I need
    const { 
        editContact,
        deleteContact
    } = addressContext;

    //these are props passed down from the parent component that is mapping through
    //them
    const { id, name, address1, address2, town, county, postcode, telephone, email } = contact;

    return (
        <div key={id} className="container card all-center">
                    
                        <h2>{name}</h2>
                        <p><strong>Address Line 1:</strong> {address1}</p>
                        <p><strong>Address Line 2:</strong> {address2}</p>
                        <p><strong>Town/City:</strong> {town}</p>
                        <p><strong>County:</strong> {county}</p>
                        <p><strong>Postcode:</strong> {postcode}</p>
                        <p><strong>Telephone:</strong><a href={`tel:${telephone}`}> {telephone}</a></p>
                        <p><strong>Email:</strong><a href={`mailto:${email}`}> {email}</a> </p>
                    
                            
                            
                        <div className="grid-2">   
                            <button onClick={e => editContact(contact)} className="btn-dark round-btn p m-1"><i className="fas fa-edit x2"></i></button>
                            <button onClick={e => deleteContact(id)} className="btn-danger round-btn p m-1"><i className="fas fa-times x2"></i></button>
                        </div> 
                </div>

    )
}

export default Address
