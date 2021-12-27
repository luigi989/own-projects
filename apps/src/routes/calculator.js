import { useState } from 'react';
import '../css/calculator.css';

export default function Calculator() {
  const [sum, setSum] = useState();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState();
  const [operatorSet, setOperatorSet] = useState(false);
  
  const saveNumber = (number) => {
    if(operatorSet) {
      setNumber2(removeZero(number));
    } else {
      setNumber1(removeZero(number));
    }
    console.log(number1 + ": " + number2);
    console.log(operator + ": " + operatorSet);
  }

  const removeZero = (number) => {
    if(number === 0) {
      return number.slice(0,-1);
    } else {
      return number;
    }
  }

  const clearNumbers = () => {
    setNumber1(0);
    setNumber2(0);
    setOperatorSet(false);
    console.log(number1 + ": " + number2);
    console.log(operator + ": " + operatorSet);
  }
  
  const saveOperator = (operator) => {
    setOperator(operator);
    setOperatorSet(true);
  }

  const calculate = () => {
    if(operatorSet && number1 > 0 && number2 > 0) {
      setSum(number1 + number2);
      console.log(sum);
    } else {
      console.log("Something went wrong");
    }
  }

  return (
    <div className="content text-light">
        <h2>Calculator</h2>
        <p>{!operatorSet ? number1 : number2}</p>
        <p>{operator}</p>
        <div className='grid-5x4'>
          <button className='grid-start' onClick={clearNumbers}>AC</button>
          <button onClick={e => saveNumber(number1.slice(0, -1))}>C</button>
          <button>/</button>

          <button onClick={e => saveNumber(number1 + e.target.textContent)}>9</button>
          <button>8</button>
          <button>7</button>
          <button>*</button>
          <button>6</button>
          <button>5</button>
          <button>4</button>
          <button>-</button>
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button onClick={e => saveOperator(e.target.textContent)}>+</button>
          <button className='grid-start'>0</button>
          <button>,</button>
          <button onClick={calculate}>=</button>
        </div>
    </div>
  );
}