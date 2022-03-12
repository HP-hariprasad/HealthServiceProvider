import {
   SERVICE_LIST_PENDING,
   SERVICE_LIST_SUCCESS,
   SERVICE_LIST_ERROR,
   PROVIDER_LIST_ERROR,
   PROVIDER_LIST_SUCCESS,
   PROVIDER_LIST_PENDING,
   SELECTED_SERVICE_SUCCESS,
   SELECTED_SERVICE_PENDING,
   SELECTED_SERVICE_ERROR,
} from './Types'

export const fetchServicesSuccess = (services) => {
   return {
      type: SERVICE_LIST_SUCCESS,
      services
   }
}

export const fetchServicesPending = () => {
   return {
      type: SERVICE_LIST_PENDING,
   }
}

export const fetchServiceError = (error) => {
   return {
      type: SERVICE_LIST_ERROR,
      error: error
   }
}

export const fetchProviderSuccess = (Providers) => {
   return {
      type: PROVIDER_LIST_SUCCESS,
      Providers
   }
}

export const fetchProviderPending = () => {
   return {
      type: PROVIDER_LIST_PENDING,
   }
}

export const fetchProviderError = (error) => {
   return {
      type: PROVIDER_LIST_ERROR,
      error: error
   }
}

export const fetchSelectedServiceSucceed = (selectedService) => {
   return {
      type: SELECTED_SERVICE_SUCCESS,
      selectedService
   }
}

export const fetchSelectedServicePending = () => {
   return {
      type: SELECTED_SERVICE_PENDING,
   }
}

export const fetchSelectedServiceError = (error) => {
   return {
      type: SELECTED_SERVICE_ERROR,
      error: error
   }
}
