import './cell.css'
import React from 'react';

class Cell extends React.Component {
    render() {
        return (
            <div className="w-10 h-10 position-relative">
                <div className="bg-primary ps-1">
                    1
                </div>
                <div className="bg-info d-flex flex-column align-items-center">
                    <div className="">H</div>
                    <div className="flex-grow-1">1,008</div>
                </div>
            </div>
        );
    }
}

class EmptyCell extends React.Component {
    render() {
        return (
            <div className="w-10 h-10 position-relative">
                <div className="bg-primary ps-1">
                </div>
                <div className="bg-info d-flex flex-column align-items-center">
                    <div className=""></div>
                    <div className="flex-grow-1"></div>
                </div>
            </div>
        );
    }
}
export {
    Cell,
    EmptyCell,    
};