import { combineReducers } from 'redux'; 
import { ServiceReducer } from './serviceReducer';
import { ProviderReducer } from './providerReducer'
import {SelectedServiceReducer} from './selectedServiceReducer'

const rootReducer = combineReducers({
    Services:ServiceReducer,
    ProviderList:ProviderReducer,
    SelectedService:SelectedServiceReducer
 }) 
 export default rootReducer;