import React from 'react';

function getHeaderColor(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'bg-[#0066CC]'
        case 'noble gas': return 'bg-[#293F76]'
        case 'alkali metal': return 'bg-[#833081]'
        case 'alkaline earth metal': return 'bg-[#A63737]'
        case 'metalloid': return 'bg-[#006600]'
        case 'polyatomic nonmetal': return 'bg-[#0066CC]'
        case 'post-transition metal': return 'bg-[#00cc00]'
        case 'transition metal': return 'bg-[#FF6600]'
        case 'lanthanide': return 'bg-[#CC6699]'
        case 'actinide': return 'bg-[#CC33FF]'
        default: return 'none'
    }
}

function getBodyColor(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'bg-[#03C]'
        case 'noble gas': return 'bg-[#1B284B]'
        case 'alkali metal': return 'bg-[#582062]'
        case 'alkaline earth metal': return 'bg-[#722525]'
        case 'metalloid': return 'bg-[#003C00]'
        case 'polyatomic nonmetal': return 'bg-[#03C]'
        case 'post-transition metal': return 'bg-[#008400]'
        case 'transition metal': return 'bg-[#A64200]'
        case 'lanthanide': return 'bg-[#AF3A75]'
        case 'actinide': return 'bg-[#A600DD'
        default: return 'none'
    }
}


function Cell(props) {
    return(
        <div className={"wh-10 text-white " + getHeaderColor(props.eData.category)}>
            <div className="px-1">
                {props.eData.number}
            </div>
            <div className={"text-center " + getBodyColor(props.eData.category)}>
                <div className="">{props.eData.symbol}</div>
                <div className="">
                    {props.eData.atomic_mass.toPrecision(3)}
                </div>
            </div>
        </div>
    );
}

function IntervalCell(props) {
    return(
        <div className="flex flex-col wh-10">
            <div className="px-1 bg-[#293F76]">&nbsp;</div>
            <div className="flex items-center justify-center bg-[#1B284B] text-white">
                {props.interval}
            </div>
        </div>
    );
}

function EmptyCell() {
    return (
        <div className="wh-10">
            <div className="bg-transparent px-1">
            </div>
            <div className="bg-info flex flex-col items-center">
                <div className=""></div>
                <div className="flex-grow"></div>
            </div>
        </div>
    );
}
export {
    Cell,
    EmptyCell,    
    IntervalCell,
};