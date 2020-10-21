import React, { useState } from 'react';

const AddAddress = () => {
    const [name, setName ] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [town, setTown ] = useState("");
    const [county, setCounty ] = useState("");
    const [postcode, setPostcode] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <form action="" className="form">
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
}

export default AddAddress
