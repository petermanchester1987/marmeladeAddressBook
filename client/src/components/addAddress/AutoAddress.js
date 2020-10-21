import React, { Fragment, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddressContext from '../../context/address/addressContext';



const AutoAddress = () => {

    //Bringing in context into the component
    const addressContext = useContext(AddressContext); 

     // Destructuring the context methods I need
    const { 
        seeAuto,
        hideAuto,
        addContact,
        name,
        address1,
        address2,
        town,
        county,
        postcode,
        telephone,
        email,
        setName,
        setAddress1,
        setAddress2,
        setTown,
        setCounty,
        setPostcode,
        setTelephone,
        setEmail

    } = addressContext;


    const onSubmit = (e) => {
            // stop default form submission
            e.preventDefault();
             //creating a contact object which I can then add to the array
            const createContact = {
            // I brought in the uuid module for easy id creation
            id: uuidv4(),
            name,
            address1,
            address2,
            town,
            county,
            postcode,
            telephone,
            email,
            
            }
            addContact(createContact);

            //this was the annoying thing I had to do to keep the local and global states separate 
            //because of not having a back end in to make get calls to

            setName("");
            setAddress1("");
            setAddress2("");
            setTown("");
            setCounty("");
            setPostcode("");
            setTelephone("");
            setEmail("");

            hideAuto();

    }

    if (seeAuto)
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Enter Address Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    name="address1"
                    value={address1}
                    placeholder="Enter Address Line 1"
                    onChange={(e) => setAddress1(e.target.value)}
                    />

                <input
                    type="text"
                    name="address2"
                    value={address2}
                    placeholder="Enter Address Line 2"
                    onChange={(e) => setAddress2(e.target.value)}

                />

                <input
                    type="text"
                    name="town"
                    value={town}
                    placeholder="Enter Town/City"
                    onChange={(e) => setTown(e.target.value)}

                />

                <input
                    type="text"
                    name="county"
                    value={county}
                    placeholder="Enter County"
                    onChange={(e) => setCounty(e.target.value)}


                />

                <input
                    type="text"
                    name="postcode"
                    value={postcode}
                    placeholder="Enter Postcode"
                    onChange={(e) => setPostcode(e.target.value)}

                />
                
                <input
                    type="text"
                    name="telephone"
                    value={telephone}
                    placeholder="Add Telephone"
                    onChange={(e) => setTelephone(e.target.value)}

                />

                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Add Email"
                    onChange={(e) => setEmail(e.target.value)}

                />
                
                <input
                    type="submit"
                    className="btn btn-dark btn-block"
                    value="Submit"
                 />

            </form>
        </div>
    )
    return <Fragment></Fragment>
}

export default AutoAddress;
