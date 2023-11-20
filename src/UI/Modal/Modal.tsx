import React from "react";
import "./Modal.css"

const Modal: React.FC<any> = ({active, setActive, children, closeAfterClick = false}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e: any) => closeAfterClick ? '' : e.stopPropagation()}>
                <div className="modalBody">
                    {children}
                </div>
            </div>
        </div>
    )
}


export default Modal;