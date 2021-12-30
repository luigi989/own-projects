import { useEffect, useState } from 'react';
import '../css/calculator.css';

/*
TODO: After clearing last number, number1 or number2 are not updated with the cleared number.
*/
export default function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const [operator, setOperator] = useState("empty");
  const [operatorSet, setOperatorSet] = useState(false);
  const [numberDisplayed, setNumberDisplayed] = useState(0);

  const printInfo = () => {
    console.log(number1 + ": " + number2);
    console.log(operator + ": " + operatorSet);
  }

  const saveNumber = (number) => {
    number = parseInt(removeZeroIfExists(number));
    console.log(number);
    if(!operatorSet) {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
    setNumberDisplayed(number);
  }
  
  const num1orNum2 = () => {
    if(!operatorSet) {
      return number1;
    } else {
      return number2;
    }
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
      return number.slice(1);
    } else {
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
    if(operatorSet && (number1 > 0 || number2 > 0)) {
      switch(operator) {
        case '+':
          setTotal(number1 + number2);
          break;
        case '-':
          setTotal(number1 - number2);
          break;
        case '*':
          setTotal(number1 * number2);
          break;
        case '/': 
        setTotal(number1 / number2);
          break;
        default:
          break;
      }
    } else {
      console.log("Something went wrong");
    }
  }

  useEffect(() => {
    setNumberDisplayed(total);
    console.log(total);
  }, [total, setTotal])

  return (
    <div className="content text-light">
        <h2>Calculator</h2>
        <p>{numberDisplayed}</p>
        <div className='grid-5x4'>
          <button className='grid-start' onClick={clearNumbers}>AC</button>
          <button onClick={removeLastNumber}>C</button>
          <button onClick={e => saveOperator(e.target.textContent)}>/</button>

          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>9</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>8</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>7</button>
          <button onClick={e => saveOperator(e.target.textContent)}>*</button>

          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>6</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>5</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>4</button>

          <button onClick={e => saveOperator(e.target.textContent)}>-</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>3</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>2</button>
          <button onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>1</button>
          <button onClick={e => saveOperator(e.target.textContent)}>+</button>

          <button className='grid-start' onClick={e => saveNumber(num1orNum2() + e.target.textContent)}>0</button>
          <button>.</button>
          <button onClick={calculate}>=</button>
        </div>
    </div>
  );
}