import { useState } from 'react'
import { NumberCell } from './cells';
import { Row1, Row2, Row3, Row4, Row5, Row6, Row6exp, Row7, Row7exp } from './rows';

interface CategoryItemProps {
  category: string;
  children: React.ReactNode;
}

function App() {
  const onHover = (state: boolean, category: string) => {
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
      if (!cells[i].className.includes(String(category))) {
        if (state) {
          cells[i].style.filter = 'grayscale(100%)';
          cells[i].style.transition = 'all 0.3s';
        } else {
          cells[i].style.filter = 'none';
          cells[i].style.transition = 'all 0.3s';
        }
      }
    };
  }

  const CategoryItem = ({category, children}: CategoryItemProps) => {
    function setHoverColor(category) {
      var hoveredCellClasses = document.getElementsByClassName(String(category)).item(0).firstChild.className;
      const hoverColor = hoveredCellClasses.split(' ')[1];
      var hoverClass = 'hover:' + hoverColor;
      console.log(hoverClass);
      return hoverClass;
    }

    return (
      <div 
        onMouseEnter={() => onHover(true, category)} 
        onMouseLeave={() => onHover(false, category)}
        className={'p-2 bg-slate-800 hover:bg-blue-600 cursor-default last:rounded-b-2xl transition ease-linear duration-300'}>
          {children}
      </div>
    );
  }

  return (
    <div className='w-screen h-screen bg-[#34384b]'>
      <header className="flex items-center justify-center py-2 bg-slate-800">
        <h2 className='text-slate-400'>Periodiska systemet</h2>
      </header>
      <div className=" text-white flex justify-center mt-4 relative">
        <div className='absolute left-10'>
          <h3 className='bg-slate-800 rounded-t-2xl m-0 p-2 text-center text-slate-400'>Categories</h3>
          <CategoryItem category='diatomicNonmetal'>Diatomic nonmetal</CategoryItem>
          <CategoryItem category='nobleGas'>Noble gas</CategoryItem>
          <CategoryItem category='alkaliMetal'>Alkalie metal</CategoryItem>
          <CategoryItem category='alkalineEarthMetal'>Alkaline earth metal</CategoryItem>
          <CategoryItem category='metalloid'>Metalloid</CategoryItem>
          <CategoryItem category='polyatomicNonmetal'>Polyatomic nonmetal</CategoryItem>
          <CategoryItem category='postTransitionMetal'>Post-transition metal</CategoryItem>
          <CategoryItem category='transitionMetal'>Transition metal</CategoryItem>
          <CategoryItem category='lanthanide'>Lanthanide</CategoryItem>
          <CategoryItem category='actinide'>Actinide</CategoryItem>
          <CategoryItem category='unknown'>Unknown</CategoryItem>
        </div>
        <div className='flex flex-col gap-1'>
          <NumberCell id='row1num' row='row1'>1</NumberCell>
          <NumberCell id='row2num' row='row2'>2</NumberCell>
          <NumberCell id='row3num' row='row3'>3</NumberCell>
          <NumberCell id='row4num' row='row4'>4</NumberCell>
          <NumberCell id='row5num' row='row5'>5</NumberCell>
          <NumberCell id='row6num' row='row6'>6</NumberCell>
          <NumberCell id='row7num' row='row7'>7</NumberCell>
          <NumberCell id='row6num' row='row6'>8</NumberCell>
          <NumberCell id='row7num' row='row7'>9</NumberCell>
        </div>
        <div className='flex flex-col gap-1'>
          <div id='row1'><Row1 /></div>
          <div id='row2'><Row2 /></div>
          <div id='row3'><Row3 /></div>
          <div id='row4'><Row4 /></div>
          <div id='row5'><Row5 /></div>
          <div id='row6'><Row6 /></div>
          <div id='row7'><Row7 /></div>
          <div id='row6'><Row6exp /></div>
          <div id='row7'><Row7exp /></div>
        </div>
      </div>
    </div>
  );
}
export default App;