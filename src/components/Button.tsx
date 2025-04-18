import './Button.css'


export interface ButtonProps {
    text: string;
}

export function Button(properties: ButtonProps) {
    return (
        <>
            <button className='button'>{properties.text}</button>
        </>
    );
}

export default Button