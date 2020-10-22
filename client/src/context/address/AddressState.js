import React, { useReducer } from 'react';
import axios from 'axios';
import addressContext from './addressContext';
import addressReducer from './addressReducer';
import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_AUTO,
    DELETE_CONTACT,
    EDIT_CONTACT,
    SET_NAME,
    SET_POSTCODE,
    SEARCH_ADDRESS,
    SET_LINE_ONE,
    SET_LINE_TWO,
    SET_TOWN,
    SET_COUNTY,
    SET_EMAIL,
    SET_TELEPHONE,
    SET_ADDRESS,
    ADD_CONTACT,
    HIDE_AUTO,
    CLEAR_ADDRESSES,
    SHOW_ADDRESS_SELECTOR,
    HIDE_ADDRESS_SELECTOR

} from '../constants';


/* As I mentioned, I added the Context API because I wanted to practise 
using context and hooks.

I thought I would only need one context, the address context, 
as that is what will be used on the main components
*/

const AddressState =  props => {

    //This is setting the initial global state.
    const initialState = {
        id: "",
        name: "",
        address1: "",
        address2: "",
        town: "",
        county: "",
        postcodes: [],
        addresses: [],
        postcode: "",
        telephone: "",
        email: "",
        contacts: [{
            id: "1",
        name: "Peter Manchester",
        address1: "Relocated from Manchester",
        address2: "House Somewhere Near Marmalade",
        town: "Peterborough",
        county: "Cambridgeshire",
        postcode: "PE3 8AF",
        telephone: "07787571686",
        email: "petermanchester1987@gmail.com",
        }, 
    ],
        loading: false,
        seeAddressSelector: false,
        //seeManual: false,
        seeAuto: false,
    
    }

    //we use the useReducer hook to set the state around our App
    const [ state, dispatch ] = useReducer(addressReducer, initialState);

    //These will be my actions
    //Search postcode

    const searchPostcode = async (postcode) => {
        setLoading();

        const res = await axios.get(
            `/api/${postcode}`
        )

       dispatch({
           type: SEARCH_POSTCODE,
           payload: res.data
       })
    }

    //get addresses

    //Set name
    const setName = (name) => dispatch({ 
        type: SET_NAME,
        payload: name
     })

     //set Postcode
     const setPostcode = (postcode) => dispatch({ 
        type: SET_POSTCODE,
        payload: postcode
     })

     //set Address Line 1
     const setAddress1 = (lineOne) => dispatch({
         type: SET_LINE_ONE,
         payload: lineOne
     })
     //set Address Line 2
     const setAddress2 = (lineTwo) => dispatch({
         type: SET_LINE_TWO,
         payload: lineTwo
     })
     //set Line 1
     const setTown = (town) => dispatch({
         type: SET_TOWN,
         payload: town
     })
     //set Line 1
     const setCounty = (county) => dispatch({
         type: SET_COUNTY,
         payload: county
     })
     //set Line 1
     const setEmail = (email) => dispatch({
         type: SET_EMAIL,
         payload: email
     })
     //set Line 1
     const setTelephone = (telephone) => dispatch({
         type: SET_TELEPHONE,
         payload: telephone
     })

     //set address
     const setAddress = address => dispatch({
         type: SET_ADDRESS,
         payload: address
     })

    //search address
    const searchAddress = async (searchPostcode) => {
        setLoading();

        const res = await axios.get(
            `/api/address/${searchPostcode}`
        )
            dispatch({
                type: SEARCH_ADDRESS,
                payload: res.data
            })
    }

    // Clear addresses

    const clearAddresses = () => dispatch({
        type: CLEAR_ADDRESSES
    })

    // add Contact
    const addContact = (contact) => dispatch({
        type: ADD_CONTACT,
        payload: contact
    })

    //edit contact
    const editContact = (id) => dispatch({ 
        type: EDIT_CONTACT,
        payload: id
    })
    //delete contact
    const deleteContact = (id) => dispatch({ 
        type: DELETE_CONTACT,
        payload: id
    })

    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    //show Auto address input
    const showAuto = () => dispatch({ type: SHOW_AUTO });
    //show AddressSelector dropdown
    const showAddressSelector = () => dispatch({ type: SHOW_ADDRESS_SELECTOR });

    //hide Auto  address input
    const hideAuto = () => dispatch({ type: HIDE_AUTO });
    //hide AddressSelector dropdown
    const hideAddressSelector = () => dispatch({ type: HIDE_ADDRESS_SELECTOR });

    //we return the provider , this wraps our application and will pass 
    // on our data all around the application
    return <addressContext.Provider
        value={{
            id: state.id,
            name: state.name,
            address1: state.address1,
            address2: state.address2,
            town: state.town,
            county: state.county,
            postcode: state.postcode,
            postcodes: state.postcodes,
            addresses: state.addresses,
            telephone: state.telephone,
            email: state.email,
            contacts: state.contacts,
            loading: state.loading,
            seeAuto: state.seeAuto,
            seeAddressSelector: state.seeAddressSelector,
            showAddressSelector,
            hideAddressSelector,
            showAuto,
            hideAuto,
            searchPostcode,
            setLoading,
            setName,
            setPostcode,
            setAddress1,
            setAddress2,
            setTown,
            setCounty,
            setTelephone,
            setEmail,
            setAddress,
            searchAddress,
            addContact,
            deleteContact,
            editContact,
            clearAddresses


        }}>
            {props.children}
        </addressContext.Provider>
}

export default AddressState;