const initialState = {
    data: [],
    loading: false,
    error: null,
    counter: 0,
    number: 10000
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, loading: false, error: null, number: action.numberdata };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
      case 'DECREMENT':
         return { ...state, counter: state.counter - 1 };
      default:
        return state;
    }
  };