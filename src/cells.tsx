import { Element } from "./types"

interface CellProps {
    element: Element
}

interface IntervalCellProps {
    interval: string
}

interface NumberCellProps {
    id: string
    row: string
    className?: string
    children: React.ReactNode
}

function getHeaderColor(category: string) {
    switch (category) {
        case 'diatomic nonmetal': return 'bg-[#0066CC]'
        case 'noble gas': return 'bg-[#293F76]'
        case 'alkali metal': return 'bg-[#833081]'
        case 'alkaline earth metal': return 'bg-[#A63737]'
        case 'metalloid': return 'bg-[#006600]'
        case 'polyatomic nonmetal': return 'bg-[#0066CC]'
        case 'post-transition metal': return 'bg-[#00cc00]'
        case 'transition metal': return 'bg-[#FF6600]'
        case 'lanthanide': return 'bg-[#CC6699]'
        case 'actinide': return 'bg-[#CC33FF]'
        default: return 'bg-[#05595B]'
    }
}

function getBodyColor(category: string) {
    switch (category) {
        case 'diatomic nonmetal': return 'bg-[#03C]'
        case 'noble gas': return 'bg-[#1B284B]'
        case 'alkali metal': return 'bg-[#582062]'
        case 'alkaline earth metal': return 'bg-[#722525]'
        case 'metalloid': return 'bg-[#003C00]'
        case 'polyatomic nonmetal': return 'bg-[#03C]'
        case 'post-transition metal': return 'bg-[#008400]'
        case 'transition metal': return 'bg-[#A64200]'
        case 'lanthanide': return 'bg-[#AF3A75]'
        case 'actinide': return 'bg-[#A600DD]'
        default: return 'bg-[#062C30]'
    }
}

function getCategory(category: string) {
    switch (category) {
        case 'diatomic nonmetal': return 'cell diatomicNonmetal'
        case 'noble gas': return 'cell nobleGas'
        case 'alkali metal': return 'cell alkaliMetal'
        case 'alkaline earth metal': return 'cell alkalineEarthMetal'
        case 'metalloid': return 'cell metalloid'
        case 'polyatomic nonmetal': return 'cell polyatomicNonmetal'
        case 'post-transition metal': return 'cell postTransitionMetal'
        case 'transition metal': return 'cell transitionMetal'
        case 'lanthanide': return 'cell lanthanide'
        case 'actinide': return 'cell actinide'
        default: return 'cell unknown'
    }
}

const Cell = ({ element }: CellProps) => {
    return (
        <div className={"wh-10 text-white flex flex-col " + getCategory(element.category)}>
            <div className={"px-1 " + getHeaderColor(element.category)}>
                {element.number}
            </div>
            <div className={"text-center grow " + getBodyColor(element.category)}>
                <div className="">{element.symbol}</div>
                <div className="">
                    {element.atomic_mass.toPrecision(3)}
                </div>
            </div>
        </div>
    );
}

const IntervalCell = ({ interval }: IntervalCellProps) => {
    return (
        <div className="flex flex-col wh-10">
            <div className="px-1 bg-[#2B2B2B]">&nbsp;</div>
            <div className="flex items-center justify-center bg-[#171010] text-white w-full text-xs grow">
                {interval}
            </div>
        </div>
    );
}

const EmptyCell = () => {
    return (
        <div className="wh-10">
            <div className="bg-transparent px-1">
            </div>
            <div className="bg-info flex flex-col items-center">
                <div></div>
                <div className="flex-grow"></div>
            </div>
        </div>
    );
}

const NumberCell = ({ id, row, className, children }: NumberCellProps) => {
    const onHover = (state: boolean, row: string) => {
        var rows = document.getElementById(row)?.parentElement?.children as HTMLCollectionOf<HTMLElement>;
        var rowNum = document.getElementById(row + 'num');
        if (rows) {
            [...rows].forEach(currentRow => {
                if (currentRow.id !== row && rowNum) {
                    if (state) {
                        rowNum.style.textDecoration = 'underline';
                        currentRow.style.filter = 'grayscale(100%)';
                        currentRow.style.transition = 'all 0.3s';
                    } else {
                        rowNum.style.textDecoration = 'none';
                        currentRow.style.filter = 'none';
                        currentRow.style.transition = 'all 0.3s';
                    }
                }
            });
        }
    }

    return (
        <div id={id} onMouseEnter={() => onHover(true, row)} onMouseLeave={() => onHover(false, row)}
            className={className + ' wh-10 inline-flex justify-center items-center text-xl'}>
            {children}
        </div>
    );
}

export {
    Cell,
    EmptyCell,
    IntervalCell,
    NumberCell,
};
