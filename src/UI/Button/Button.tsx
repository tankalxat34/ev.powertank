import "./Button.css";

interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    viewType?: string
}

export const Button: React.FC<IButton> = (props) => {
    return (
        <>
            {props.disabled
                ? <button className={`btn ${props.viewType || 'primary'}`} {...props} onClick={() => null}>
                        {props.children}
                </button>
                : <button className={`btn ${props.viewType || 'primary'}`} {...props}>
                    {props.children}
                </button>
            }
        </>
    )
}