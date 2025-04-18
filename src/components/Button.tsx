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
    text: string;
    buttonType: string;
    buttonValue: number;
}

export function Button(properties: ButtonProps) {
    return (
        <>
            <button className='button'>{properties.text}</button>
        </>
    );
}

export default Button