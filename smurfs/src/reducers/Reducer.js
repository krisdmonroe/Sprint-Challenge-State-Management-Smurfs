import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    ADD_SMURF,
    DELETE_SMURF
  } from '../actions/actions';
  
export const initialState = 
    {
    smurfs:[],
  }

export const Reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_SMURF_START: 
        return {
            ...state, isLoading: true
        }
        case FETCHING_SMURF_SUCCESS:
            return {...state, isLoading: false, smurfs: action.payload,}
        case ADD_SMURF: const smurf = {
            ...action.payload,
        } 
        return {
            ...state,
            smurfs: [
                ...state.smurfs, smurf
            ]
        }
        case DELETE_SMURF: 
        return {
            smurfs: action.payload
        }
        default:
            return state;
    }
}