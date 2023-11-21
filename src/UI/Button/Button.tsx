import "./Button.css";

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    viewtype?: string
}

export const Button: React.FC<IButton> = (props) => {
    return (
        <>
            {props.disabled
                ? <button className={`btn ${props.viewtype || 'primary'}`} {...props} onClick={() => null}>
                        {props.children}
                </button>
                : <button className={`btn ${props.viewtype || 'primary'}`} {...props}>
                    {props.children}
                </button>
            }
        </>
    )
}