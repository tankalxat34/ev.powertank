import "./Button.css";


export const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
    return (
        <>
            {props.disabled
                ? <button className={`btn ${props.type || 'primary'}`} {...props} onClick={() => null}>
                        {props.children}
                </button>
                : <button className={`btn ${props.type || 'primary'}`} {...props}>
                    {props.children}
                </button>
            }
        </>
    )
}