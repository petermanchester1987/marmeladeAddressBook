import React from 'react';

const Address = ({ contact }) => {

    const { id, name, address1, address2, town, county, postcode, telephone, email } = contact;

    return (
        <div key={id} className="container card all-center m-1">
                    
                        <h2>{name}</h2>
                        <p><strong>Address Line 1:</strong> {address1}</p>
                        <p><strong>Address Line 2:</strong> {address2}</p>
                        <p><strong>Town/City:</strong> {town}</p>
                        <p><strong>County:</strong> {county}</p>
                        <p><strong>Postcode:</strong> {postcode}</p>
                        <p><strong>Telephone:</strong> {telephone}</p>
                        <p><strong>Email:</strong> {email}</p>
                    
                            
                            
                        <div className="grid-2">   
                            <button className="btn-light p-1 m-1"><i className="fas fa-edit x2"></i></button>
                            <button className="btn-danger p-1 m-1"><i className="fas fa-times x2"></i></button>
                        </div> 
                </div>

    )
}

export default Address
