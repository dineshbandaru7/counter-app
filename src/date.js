import { useState } from "react";

function DateCounter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  let today =  Date.now();

  let todayValue = today ;

  let newValue = todayValue + (count * 86400000);

  let dateData = new Date(newValue);

  let newDate = dateData.toDateString();

  function handleReset(){
    setCount(0);
    setStep(0);
  }

  function handeStepDown() {
    if (step > 0) setStep(step - 1);
  }

  function handleCountUp() {
    if (step < 1) setCount(count + 1);
    else setCount(count + step);
  }
  function handleCountDown() {
    if (step < 1 && count > 0) setCount(count - 1);
    else if (count >= step) setCount(count - step);
  }

  return (
    <div className="counter">
      <div className="count">
        <button onClick={handeStepDown}>-</button>
        <span>step:{step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="step">
        <button onClick={handleCountDown}>-</button>
        <input  value={count} onChange={(e)=> setCount(e.target.value)} ></input>
        <button onClick={handleCountUp}>+</button>
      </div>
      <button className="reset" onClick={handleReset} >Reset</button>
      <div>
        <p>
          {count} days from today is  {newDate}
        </p>
      </div>
    </div>
  );
}

export default DateCounter;
