import { useDispatch, useSelector } from 'react-redux';
import { RESET, INCREMENT, DECREMENT } from '../../redux/counter/constants.js';
import { selectCounter, selectStep } from '../../redux/counter/selectors.js';

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const handleMinusClick = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleResetClick = () => {
    dispatch({
      type: RESET,
    });
  };
  const handleChangeStep = () => {};
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div>
          <button onClick={handleMinusClick}>minus</button>
          <button onClick={handleResetClick}>reset</button>
          <button onClick={handlePlusClick}>plus</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
