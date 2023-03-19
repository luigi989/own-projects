import { MouseEvent, useState } from 'react';
import { Cell, EmptyCell, IntervalCell } from './cells';
import data from './json/PeriodicTableJSON.json';
import ElementModal from './modal';
import { Element } from './types';

interface RowProps {
    start: number;
    end: number;
    divider?: number;
    emptyCells?: number;
}

interface LoopSpecialRowProps {
    start: number;
    end: number;
}

interface RowSplitProps {
    start1: number;
    start2: number;
    end1: number;
    end2: number;
    interval: string;
}

const LoopRow = ({start, end, divider, emptyCells}: RowProps) => {
    const [show, setShow] = useState(false);
    const [currentData, setCurrentData] = useState<Element | null>(null);
    const handleClose = () => setShow(false);
    const handleShow = (e: MouseEvent<HTMLDivElement>) => {
        setShow(true);
        var index = e.currentTarget.firstChild?.firstChild?.firstChild?.nodeValue;
        if (index) {
            const i = parseInt(index);
            setCurrentData(data.elements[i - 1]);
        }
    }

    var elems = [];
    for(var i = start; i <= end; i++) {
        if(divider && i === divider) {
            if (emptyCells) {
                for (var j = 0; j < emptyCells; j++) {
                    elems.push(
                        <div key={j}>
                            <EmptyCell></EmptyCell>
                        </div>);
                }
            }
            elems.push(
                <div className='hover:scale-125 hover:shadow-[0_0_0_2px] hover:shadow-black cursor-pointer' 
                    key={data.elements[i].name} 
                    onClick={(e) => { handleShow(e) }}>
                    <Cell element={data.elements[i]}></Cell>
                </div>);
        } else {
            elems.push(
                <div className='hover:scale-125 hover:shadow-[0_0_0_2px] hover:shadow-black cursor-pointer' 
                    key={data.elements[i].name} 
                    onClick={(e) => { handleShow(e) }}>
                    <Cell element={data.elements[i]}></Cell>
                </div>);
        }
    }

    return (
        <div className='flex'>
            <div className='w-2/3'>
                <div className='flex gap-1'>
                    {elems}
                </div>
                {show && currentData && <ElementModal onOpen={show} onClose={handleClose} data={currentData} />}
            </div>
        </div>
    );
}

const LoopSplitRow = ({start1, start2, end1, end2, interval}: RowSplitProps) => {
    const [show, setShow] = useState(false);
    const [currentData, setCurrentData] = useState<Element | null>(null);
    const handleClose = () => setShow(false);
    const handleShow = (e: MouseEvent<HTMLDivElement>) => {
        setShow(true);
        var index = e.currentTarget.firstChild?.firstChild?.firstChild?.nodeValue;
        if (index) {
            const i = parseInt(index);
            setCurrentData(data.elements[i - 1]);
        }
    }

    var elems = [];
    for(var i = start1; i <= end1; i++) {
        elems.push(
            <div className='hover:scale-125 hover:shadow-[0_0_0_2px] hover:shadow-black cursor-pointer' key={data.elements[i].name} onClick={(e) => {handleShow(e)}}>
                <Cell element={data.elements[i]} ></Cell>
            </div>);
    }
    elems.push(<div key={i}><IntervalCell interval={interval}></IntervalCell></div>)
    for(i = start2; i <= end2; i++) {
        elems.push(
            <div className='hover:scale-125 hover:shadow-[0_0_0_2px] hover:shadow-black cursor-pointer'
                key={data.elements[i].name} onClick={(e) => { handleShow(e) }}>
                <Cell element={data.elements[i]}></Cell>
            </div>);
    }

    return (
        <div className='flex'>
            <div className='w-2/3'>
                <div className='flex gap-1'>
                    {elems}
                </div>
                {show && currentData && <ElementModal onOpen={show} onClose={handleClose} data={currentData} />}
            </div>
        </div>
    );
}

const LoopSpecialRow = ({start,end}: LoopSpecialRowProps) => {
    const [show, setShow] = useState(false);
    const [currentData, setCurrentData] = useState<Element | null>(null);
    const handleClose = () => setShow(false);
    const handleShow = (e: MouseEvent<HTMLDivElement>) => {
        setShow(true);
        var index = e.currentTarget.firstChild?.firstChild?.firstChild?.nodeValue;
        if (index) {
            const i = parseInt(index);
            setCurrentData(data.elements[i - 1]);
        }
    }

    var elems = [];
    var i = start;
    elems.push(
        <div key={'e1'}>
            <EmptyCell></EmptyCell>
        </div>);
    elems.push(
        <div key={'e2'}>
            <EmptyCell></EmptyCell>
        </div>);
    for(i; i <= end; i++) {
        elems.push(
            <div className='hover:scale-125 hover:shadow-[0_0_0_2px] hover:shadow-black cursor-pointer' key={data.elements[i].name} onClick={(e) => {handleShow(e)}}>
                <Cell element={data.elements[i]} ></Cell>
            </div>);
    }

    return (
        <div className='flex'>
            <div className='w-2/3'>
                <div className='flex gap-1'>
                    {elems}
                </div>
                {show && currentData &&  <ElementModal onOpen={show} onClose={handleClose} data={currentData} />}
            </div>
        </div>
    );
}

const Row1 = () => {
    return( 
        <LoopRow start={0} end={1} divider={1} emptyCells={16}></LoopRow>
    );
}

const Row2 = () => {
    return (
        <LoopRow start={2} end={9} divider={4} emptyCells={10}></LoopRow>
    );
}

const Row3 = () => {
    return (
        <LoopRow start={10} end={17} divider={12} emptyCells={10}></LoopRow>
    );
}

const Row4 = () => {
    return (
        <LoopRow start={18} end={35} divider={0}></LoopRow>
    );
}

const Row5 = () => {
    return (
        <LoopRow start={36} end={53} divider={0}></LoopRow>
    );
}

const Row6 = () => {
    return (
        <LoopSplitRow start1={54} end1={55}
            start2={71} end2={85}
            interval={"57-71"}></LoopSplitRow>
    );
}

const Row7 = () => {
    return (
        <LoopSplitRow start1={86} end1={87}
            start2={103} end2={117}
            interval={"89-103"}></LoopSplitRow>
    );
}

const Row6exp = () => {
    return (
        <LoopSpecialRow start={56} end={70}></LoopSpecialRow>
    );
}

const Row7exp = () => {
    return (
        <LoopSpecialRow start={88} end={102}></LoopSpecialRow>
    );
}
export {
    Row1,
    Row2,
    Row3,
    Row4,
    Row5,
    Row6,
    Row7,
    Row6exp,
    Row7exp,
};

