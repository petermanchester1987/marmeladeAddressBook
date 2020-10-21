import { 
    SEARCH_POSTCODE,
    SET_LOADING,
    SHOW_MANUAL,
    DELETE_CONTACT,
    EDIT_CONTACT,
    GET_CONTACT,
    SET_NAME,
    SET_POSTCODE,
    SEARCH_ADDRESS,
    SET_LINE_ONE,
    SET_COUNTY,
    SET_TOWN,
    SET_LINE_TWO,
    SET_EMAIL,
    SET_TELEPHONE,
    SET_ADDRESS,
    ADD_CONTACT

} from '../constants';

export default (state, action) => {
    switch(action.type) {
        
            case SEARCH_POSTCODE:
                return {
                    ...state,
                    showInfo: true,
                    postcodes: action.payload,
                    loading: false
                }

             case SEARCH_ADDRESS:
                 return {
                     ...state,
                     showInfo: true,
                     addresses: action.payload.addresses,
                 }

      // I Realised after the fact that I could have written less code if I had 
      // repeated some of these reducers for more than one action

             case SET_NAME:
                 return {
                     ...state,
                     name: action.payload,
                     loading: false
                 }

                case SET_POSTCODE:
                    return {
                        ...state,
                        postcode: action.payload,
                        loading: false
                    }

                case SET_LINE_ONE:
                    return {
                        ...state,
                        address1: action.payload,
                        loading: false
                    }
                case SET_LINE_TWO:
                    return {
                        ...state,
                        address2: action.payload,
                        loading: false
                    }
                case SET_TOWN:
                    return {
                        ...state,
                        town: action.payload,
                        loading: false
                    }
                case SET_COUNTY:
                    return {
                        ...state,
                        county: action.payload,
                        loading: false
                    }
                case SET_EMAIL:
                    return {
                        ...state,
                        email: action.payload,
                        loading: false
                    }
                case SET_TELEPHONE:
                    return {
                        ...state,
                        telephone: action.payload,
                        loading: false
                    }

        // I realise SET_ADDRESS reducer looks unusual, however it was due to the order of the
        // data in the array that I was recieving from the API.
        // I would rather organise it in a DB, but this seemed the easiest 
        // way to show it quickly only using state

                case SET_ADDRESS:
                    return {
                        ...state,
                        address1: action.payload[0],
                        address2: action.payload[1],
                        town: action.payload[5],
                        county: action.payload[6],

                        loading: false,
                    }

        // using ES6 syntax to add the new contact object the contacts array          
                case ADD_CONTACT:
                    return {
                        ...state,
                        contacts: [action.payload, ...state.contacts],
                        loading: false,
                    }

                case GET_CONTACT:
                    return {
                        ...state,
                        contacts: state.contacts,
                        loading: false,
                    }

                case SET_LOADING:
                    return {
                        ...state,
                        loading: true
                    }

                    case EDIT_CONTACT:
                        return {
                            ...state,
                            contacts: [action.payload, ...state.contacts],
                            loading: false,
                        }

                    // Filter through the contacts to remove the one with the same id
                    // I realise it would be better to add a proper identifier key in production
                    // rather than a random number
                    case DELETE_CONTACT: 
                    return {
                        ...state,
                        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
                        loading: false
                    }
                    case SHOW_MANUAL:
                        return {
                            ...state,
                            seeManual: true
                        }
                default: 
                return state;
            }
}