import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckout } from '../actions';

function App() {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state);

  const handleClick = () => {
    dispatch(createCheckout());
  }
  return (
    <div className="container">
      <div>Message: { payment.message}</div>
      <button className="button is-primary" onClick={handleClick}>Purchase!</button>
    </div>
  );
}

export default App;
