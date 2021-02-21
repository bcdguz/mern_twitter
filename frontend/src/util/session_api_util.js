import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        //We can pass a falsey value as token to make sure we logout a user
        //or token has expired
        delete axios.defaults.headers.common['Authorization'];
    }
};