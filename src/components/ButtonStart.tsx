import './Button.css'

/*
    text: text of the button
    buttonType:
        prepare
        work
        rest
        repetitions
        accept
    buttonValue: used by timer settings only. Number type
*/
export interface ButtonProps {
    prep: number;
    work: number;
    rest: number;
    reps: number;
}

export function ButtonStart(properties: ButtonProps) {
    function handleClick() {
        alert(`Prep: ${properties.prep}, Work: ${properties.work}, Rest: ${properties.rest}, Reps: ${properties.reps}`);
    }

    return (
        <>
             <button className='button' onClick={handleClick}>
                Start ({properties.prep}/{properties.work}/{properties.rest}/{properties.reps})
            </button>
        </>
    );
}

export default ButtonStart