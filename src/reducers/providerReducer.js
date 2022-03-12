import { PROVIDER_LIST_ERROR,PROVIDER_LIST_SUCCESS,PROVIDER_LIST_PENDING } from "../actions/Types";


const initialState = {
    pending: false,
    providers: [],
    error: null
}

export const ProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROVIDER_LIST_PENDING:
            return {
                ...state,
                pending: true
            }
        case PROVIDER_LIST_SUCCESS:
            return {
                ...state,
                pending : false,
                providers : action.Providers

            }
        case PROVIDER_LIST_ERROR:
            return{
                ...state,
                pending:false,
                error:action.error
            }
        default:
            return state;
    }
}
