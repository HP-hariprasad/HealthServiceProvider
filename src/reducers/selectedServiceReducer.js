import { SELECTED_SERVICE_SUCCESS,SELECTED_SERVICE_ERROR,SELECTED_SERVICE_PENDING } from "../actions/Types";


const initialState = {
    pending: false,
    selectedServices: '',
    error: null
}

export const SelectedServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_SERVICE_PENDING:
            return {
                ...state,
                pending: true
            }
        case SELECTED_SERVICE_SUCCESS:
            return {
                ...state,
                pending : false,
                selectedServices: action.selectedService
            }
        case SELECTED_SERVICE_ERROR:
            return{
                ...state,
                pending:false,
                error:action.error
            }
        default:
            return state;
    }
}