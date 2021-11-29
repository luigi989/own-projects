import './cell.css'
import React from 'react';

function getCategory(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'icke-metall'
        case 'noble gas': return 'ädelgas'
        case 'alkali metal': return 'alkaliemetall'
        case 'alkaline earth metal': return 'alkalisk-jordartsmetall'
        case 'metalloid': return 'metalloid'
        case 'polyatomic nonmetal': return 'icke-metall'
        case 'post-transition metal': return 'övrig-metall'
        case 'transition metal': return 'halvmetall'
        case 'lanthanide': return 'lantanoid'
        case 'actinide': return 'aktinid'
        default: return 'none'
    }
}

function Cell(props) {
    return(
        <div className={"wh-10 text-light flexfill " + getCategory(props.eData.category)}>
            <div className="ps-1">
                {props.eData.number}
            </div>
            <div className="text-center">
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
        <div className="d-flex flex-column wh-10 ädelgas">
            <div className="ps-1">&nbsp;</div>
            <div className="d-flex align-items-center justify-content-center text-light">
                {props.interval}
            </div>
        </div>
    );
}

function EmptyCell() {
    return (
        <div className="wh-10">
            <div className="bg-primary ps-1">
            </div>
            <div className="bg-info d-flex flex-column align-items-center">
                <div className=""></div>
                <div className="flex-grow-1"></div>
            </div>
        </div>
    );
}
export {
    Cell,
    EmptyCell,    
    IntervalCell,
};