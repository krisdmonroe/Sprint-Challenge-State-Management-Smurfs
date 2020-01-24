import axios from 'axios';


export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const ADD_SMURF = 'ADD-SMURF';
export const DELETE_SMURF = `DELETE_SMURF`;


export const fetchSmurf = () => dispatch => {
dispatch({ type: FETCHING_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is smurf res',res)
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data});
        })
        .catch(err=> {
            console.log(err)
        })
}


export const addSmurfs = (data) => dispatch => {
    dispatch ({ type: ADD_SMURF, payload: data });
    axios
    .post('http://localhost:3333/smurfs', data)
    .then(res => {
        console.log('this is res', res)
    }).catch(err => {
        console.log(err)
    })
}

export const deleteSmurfs = (id) => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        dispatch ({ type: DELETE_SMURF, payload: res.data });
    })
}


