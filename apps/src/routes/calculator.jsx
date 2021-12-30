import { useState } from 'react';
import '../css/calculator.css';

/*
TODO: After clearing last number, number1 or number2 are not updated with the cleared number.
*/
export default function Calculator() {
  const [sum, setSum] = useState();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState();
  const [operatorSet, setOperatorSet] = useState(false);
  const [numberDisplayed, setNumberDisplayed] = useState(0);

  const saveNumber = (number) => {
    number = removeZeroIfExists(number);
    console.log(number);

    if(operatorSet) {
      setNumber2(number);
    } else {
      setNumber1(number);
    }
    setNumberDisplayed(number);
    // console.log(number1 + ": " + number2);
    // console.log(operator + ": " + operatorSet);
  }

  const removeLastNumber = () => {
    if(numberDisplayed > 0 && numberDisplayed.length > 1) {
      setNumberDisplayed(numberDisplayed.slice(0, -1));
    } else {
      setNumberDisplayed(0);
    }
  }
  const removeZeroIfExists = (number) => {
    var pattern = new RegExp("^0");
    if(pattern.test(number)) {
      console.log(number);
      return number.slice(1);
    } else {
      console.log("not work");
      return number;
    }
  }

  const clearNumbers = () => {
    setNumberDisplayed(0);
    setNumber1(0);
    setNumber2(0);
    setOperatorSet(false);
    console.log(number1 + ": " + number2);
    console.log(operator + ": " + operatorSet);
  }
  
  const saveOperator = (operator) => {
    setOperator(operator);
    setOperatorSet(true);
    setNumberDisplayed(operator);
  }

  const calculate = () => {
    if(operatorSet && number1 > 0 && number2 > 0) {
      setSum(number1 + number2);
      setNumberDisplayed(number1 + number2);
      console.log(sum);
    } else {
      console.log("Something went wrong");
    }
  }

  return (
    <div className="content text-light">
        <h2>Calculator</h2>
        <p>{numberDisplayed}</p>
        <div className='grid-5x4'>
          <button className='grid-start' onClick={clearNumbers}>AC</button>
          <button onClick={removeLastNumber}>C</button>
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