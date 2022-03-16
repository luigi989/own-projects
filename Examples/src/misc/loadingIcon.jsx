import { React, useState } from 'react';
import { BlockPicker } from 'react-color';
import { FaRedo } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ModeSwitch from "../assets/modeSwitch";

function LoadingIcon() {
  const red = '#f44336';
  const green = '#4caf50';
  const blue = '#2196f3';
  const pink = '#e91e63';
  const displayColors = ['bg-red-500'];


  const [isDark, setIsDark] = useState(true);
  const [selectedObject, setSelectedObject] = useState([true, false, false, false]);
  const [colors, setColors] = useState([red, green, blue, pink]);

  function ColorSelect() {

    function changeColor(color) {
      var newArray = [...colors];
      for (var i = 0; i < newArray.length; i++) {
        if (selectedObject[i]) {
          newArray[i] = color.hex;
        }
      }
      setColors(newArray);
    }

    function setIndex(index) {
      let newArray = [false, false, false, false];
      newArray[index - 1] = true;
      setSelectedObject(newArray);
    }

    function resetColor(color, index) {
      var newArray = [...colors];
      newArray[index] = color;
      setColors(newArray);

    }

    function InputTab(props) {
      return (
        <div>
          <input type='radio' id={props.id} name='number' checked={selectedObject[props.index - 1]} onChange={() => setIndex(props.index)}
            className='peer hidden' />
          <label htmlFor={props.id} style={{ backgroundColor: colors[props.index - 1] }}
            className='peer-checked:outline peer-checked:outline-2 peer-checked:outline-slate-900  hover:bg-slate-500 p-2 rounded-2xl'>
            {props.text}
          </label>
        </div>
      );
    }

    function ResetButton(props) {
      return (
        <button className='w-fit bg-red-500' onClick={() => resetColor(props.color, props.index)}><FaRedo /></button>
      );
    }

    return (
      <div className='absolute right-12 p-2 flex flex-row items-center bg-slate-300 rounded-2xl'>

        <div className='flex flex-col justify-center items-center gap-3 px-1'>
          <Popup trigger={<button>Pick Color</button>} position='left center'>
            <BlockPicker onChangeComplete={changeColor} />
          </Popup>
        </div>

        <div className='grid grid-cols-2 gap-5 p-2'>
          <InputTab id='number1' index='1' text='Siffra 1' />
          <ResetButton color={red} index='0' />
          <InputTab id='number2' index='2' text='Siffra 2' />
          <ResetButton color={green} index='1' />
          <InputTab id='number3' index='3' text='Siffra 3' />
          <ResetButton color={blue} index='2' />
          <InputTab id='number4' index='4' text='Siffra 4' />
          <ResetButton color={pink} index='3' />
        </div>
      </div>

    );
  }

  return (
    <div className={isDark ? 'w-full h-full dark' :
      'w-full h-full '}>
      <div className='w-full h-screen flex-1 flex flex-col justify-center items-center bg-light dark:bg-dark'>

        <div className='absolute top-10 right-10'>
          <ModeSwitch setIsDark={setIsDark} />
        </div>
        <ColorSelect />

        <div className='flex justify-center items-center md:scale-100'>
          <div className="w-1/2 flex flex-wrap animate-spinSlow text-xs">
            <span style={{ backgroundColor: colors[0] }}
              className={`w-[32px] h-[32px] m-1 animate-scale
                                   rounded-t-full rounded-l-full origin-bottom-right flex items-center justify-center`}>1</span>
            <span style={{ backgroundColor: colors[1] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-500
                                   rounded-t-full rounded-r-full origin-bottom-left flex items-center justify-center`}>2</span>
            <span style={{ backgroundColor: colors[2] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-1500
                                   rounded-b-full rounded-l-full origin-top-right flex items-center justify-center`}>3</span>
            <span style={{ backgroundColor: colors[3] }}
              className={`w-[32px] h-[32px] m-1 animate-scale animation-delay-1000
                                   rounded-b-full rounded-r-full origin-top-left flex items-center justify-center`}>4</span>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoadingIcon;
