import { useNavigate } from "react-router-dom";
import "./Button.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

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


export const ButtonSignOut: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
    const navigate = useNavigate();

    return <Button
        viewtype="negative"
        onClick={() => {
            signOut(auth)
                .then(() => {
                    navigate('/');
                })
                .catch((error: Error) => {
                    alert(error.message);
                })
        }}
        {...props}
    >
        Выход
    </Button>
}