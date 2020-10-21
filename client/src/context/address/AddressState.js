import React, { useReducer } from 'react';
import axios from 'axios';
import addressContext from './addressContext';
import addressReducer from './addressReducer';
import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
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
    GET_CONTACT,
    HIDE_MANUAL,
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
        name: "1",
        address1: "1",
        address2: "1",
        town: "1",
        county: "1",
        postcode: "1",
        telephone: "1",
        email: "1",
        }, {
            id: "2",
        name: "2",
        address1: "2",
        address2: "2",
        town: "2",
        county: "2",
        postcode: "2",
        telephone: "2",
        email: "2",
        },
    ],
        loading: false,
        seeAddressSelector: false,
        seeManual: false,
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

    //getcontacts
    const getContact = (postcode) => dispatch({
        type: GET_CONTACT,
        payload: postcode
    })

    //edit contact
    const editContact = (contact) => dispatch({ 
        type: EDIT_CONTACT,
        payload: contact
    })
    //delete contact
    const deleteContact = (id) => dispatch({ 
        type: DELETE_CONTACT,
        payload: id
    })

    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    //show manual
    const showManual = () => dispatch({ type: SHOW_MANUAL });
    //show Auto
    const showAuto = () => dispatch({ type: SHOW_AUTO });
    //show AddressSelector
    const showAddressSelector = () => dispatch({ type: SHOW_ADDRESS_SELECTOR });


    //hide manual
    const hideManual = () => dispatch({ type: HIDE_MANUAL });
    //hide Auto
    const hideAuto = () => dispatch({ type: HIDE_AUTO });
    //hide AddressSelector
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
            seeManual: state.seeManual,
            seeAuto: state.seeAuto,
            seeAddressSelector: state.seeAddressSelector,
            showAddressSelector,
            hideAddressSelector,
            showManual,
            showAuto,
            hideAuto,
            hideManual,
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
            getContact,
            deleteContact,
            editContact,
            clearAddresses


        }}>
            {props.children}
        </addressContext.Provider>
}

export default AddressState;