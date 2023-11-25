import React from "react";
import "./Modal.css"
import { isEmpty } from "lodash";

export interface IModal {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
    closeAfterClick?: boolean
    newChildren?: React.ReactNode
}

export interface IModalContext extends IModal {
    setNewChildrenElement: React.Dispatch<React.SetStateAction<JSX.Element>>
}


const Modal: React.FC<IModal> = ({ active, setActive, children, newChildren = {}, closeAfterClick = false }) => {
    console.log(newChildren)
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e: any) => closeAfterClick ? '' : e.stopPropagation()}>
                <div className="modalBody">
                    {isEmpty(newChildren) ? children : newChildren}
                </div>
            </div>
        </div>
    )
}


export default Modal;