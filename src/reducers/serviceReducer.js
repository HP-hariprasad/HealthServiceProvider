import { SERVICE_LIST_ERROR, SERVICE_LIST_PENDING, SERVICE_LIST_SUCCESS } from "../actions/Types";


const initialState = {
    pending: false,
    services: [],
    error: null
}

export const ServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_LIST_PENDING:
            return {
                ...state,
                pending: true
            }
        case SERVICE_LIST_SUCCESS:
            return {
                ...state,
                pending : false,
                services : action.services
            }
        case SERVICE_LIST_ERROR:
            return{
                ...state,
                pending:false,
                error:action.error
            }
        default:
            return state;
    }
}