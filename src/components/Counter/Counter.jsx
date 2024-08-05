import { useDispatch, useSelector } from 'react-redux';
import { selectCounter, selectStep } from '../../redux/counter/selectors.js';
import {
  increment,
  decrement,
  reset,
  change_step,
} from '../../redux/counter/slice.js';

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleChangeStep = e => {
    dispatch(change_step(+e.target.value));
  };

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
