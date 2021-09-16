import './App.css';

import changeNumber from './redux/reducers/incDec';
import { useSelector, useDispatch } from 'react-redux';
import { decNumber, incNumber } from './redux/actions/index';

function App() {

  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>

      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <button className="quantity_minus" onClick={() => dispatch(decNumber())}>-</button>
          <input type="text" name="" id="" className="quantity_input" value={myState} />
          <button className="quantity_plus" onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>

    </>
  );
}

export default App;
