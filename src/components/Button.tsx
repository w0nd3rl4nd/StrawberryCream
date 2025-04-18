import './Button.css'


export interface ButtonProps {
    text: string;
    size: number;
}

export function Button({properties}: {properties: ButtonProps}) {
    return (
        <>
            <button style={{width: properties.size}}>{properties.text}</button>
        </>
    );
}

export default Button