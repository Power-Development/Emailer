import axios from 'axios';
import { FETCH_USER } from './types';


/* This commented out section is the traditional way of using function when there 
is only one function to be returned under the return fucntion. 

export const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER, payload: res}));
    };
};
*/

//action creator for fettching user to see if user is logged in / logged out
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch ({type: FETCH_USER, payload: res.data });
};

//action creator for stripe
export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({type: FETCH_USER, payload: res.data});
};

//action creator for sending out the servey email
export const submitSurvey = (values) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    
    dispatch ({type: FETCH_USER, payload: res.data}); 
};