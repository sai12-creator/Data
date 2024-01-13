import axios from "axios";

export const fetchData = (number) => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_DATA_STARTED' }); // Signal loading
      return axios.get('https://randomuser.me/api/')
        .then((response) => {
          dispatch({ type: 'FETCH_DATA_SUCCESS', payload : response.data, numberdata: number });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
        });
    };
  };
export const increment = () => ({ type: 'INCREMENT' });

export const decrement = () => ({ type: 'DECREMENT' });
