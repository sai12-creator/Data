import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, fetchData, increment } from './store/actions';


export const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error, counter , number} = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData(10000));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      {data?.results?.map((item) => (
        <div key={item.id}>
        <h1>{item.gender}</h1>
        <h1>{item.cell}</h1>
        <h1>{item.email}</h1>
        
        </div>
      ))}
      <div>
      <h1>Count: {counter}</h1>
      <h1>Count: {number}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    </div>
  );
};