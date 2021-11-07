import { Stack } from 'react-bootstrap';
import React from 'react';
import { Cell, EmptyCell, IntervalCell } from './cell';
import data from './PeriodicTableJSON.json';

class LoopRow extends React.Component {
    render() {
        let elems = [];
        let divider = this.props.divider;
        for(var i = this.props.start; i <= this.props.end; i++) {
            if(i === divider) {
                elems.push(<div key={i} className='ms-auto'><Cell eData={data.elements[i]} ></Cell></div>);
            } else {
                elems.push(<div key={i}><Cell eData={data.elements[i]} ></Cell></div>);                
            }
        }
        return (
            <div className='p-0'>
                <Stack direction='horizontal' gap={1}>
                    {elems}
                </Stack>
            </div>
        );
    }
}

class LoopSplitRow extends React.Component {
    render() {
        let elems = [];
        for(var i = this.props.start1; i <= this.props.end1; i++) {
            elems.push(<div key={i}><Cell eData={data.elements[i]} ></Cell></div>);                
        }
        elems.push(<div key={i}><IntervalCell interval={this.props.interval}></IntervalCell></div>)
        
        for(i = this.props.start2; i <= this.props.end2; i++) {
            elems.push(<div key={i}><Cell eData={data.elements[i]} ></Cell></div>);                
        }
        return (
            <div className='p-0'>
                <Stack className='' direction='horizontal' gap={1}>
                    {elems}
                </Stack>
            </div>
        );
    }
}

class LoopSpecialRow extends React.Component {
    render() {
        let elems = [];
        elems.push(<div key={i}><EmptyCell></EmptyCell></div>);
        elems.push(<div key={i}><EmptyCell></EmptyCell></div>);
        for(var i = this.props.start; i <= this.props.end; i++) {
            elems.push(<div key={i}><Cell eData={data.elements[i]} ></Cell></div>);                
        }
        elems.push(<div key={i}><EmptyCell></EmptyCell></div>);
        return (
            <div className='p-0'>
                <Stack direction='horizontal' gap={1}>
                    {elems}
                </Stack>
            </div>
        );
    }
}

class Row1 extends React.Component {
    render() {
        return (
            <LoopRow start={0} end={1} divider={1}></LoopRow>
        );
    }
}

class Row2 extends React.Component {
    render() {
        return (
            <LoopRow start={2} end={9} divider={4}></LoopRow>
        );
    }
}

class Row3 extends React.Component {
    render() {
        return (
            <LoopRow start={10} end={17} divider={12}></LoopRow>
        );
    }
}

class Row4 extends React.Component {
    render() {
        return (
            <LoopRow start={18} end={35} divider={0}></LoopRow>
        );
    }
}

class Row5 extends React.Component {
    render() {
        return (
            <LoopRow start={36} end={53} divider={0}></LoopRow>
        );
    }
}

class Row6 extends React.Component {
    render() {
        return (
            <LoopSplitRow start1={54} end1={55} 
                          start2={71} end2={85}
                          interval={"57-71"}></LoopSplitRow>
        );
    }
}

class Row7 extends React.Component {
    render() {
        return (
            <LoopSplitRow start1={86} end1={87}
                          start2={103} end2={117}
                          interval={"89-103"}></LoopSplitRow>
        );
    }
}

class Row6exp extends React.Component {
    render() {
        return (
            <LoopSpecialRow start={56} end={70}></LoopSpecialRow>
        );
    }
}

class Row7exp extends React.Component {
    render() {
        return (
            <LoopSpecialRow start={88} end={102}></LoopSpecialRow>
        );
    }
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