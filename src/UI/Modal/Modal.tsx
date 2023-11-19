import React from "react";
import "./Modal.css"

const Modal: React.FC<any> = ({active, setActive, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e: any) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}


export default Modal;