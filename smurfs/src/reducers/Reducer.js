import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE
  } from '../actions/actions';
  
export const initialState = 
    {
    smurfs:[],
    addedSmurf:{}
  }

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURF_START: 
        return {
            ...state, isLoading: true
        }
        case FETCHING_SMURF_SUCCESS:
            return {...state, isLoading: false, smurfs: action.payload,}
        case `ADD-SMURF`: {
            return {...state, addedSmurf:action.payload}
        }
        default:
            return state;
    }
}