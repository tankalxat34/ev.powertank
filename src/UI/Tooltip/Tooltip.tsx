import React, { FC, useState } from 'react';
import './Tooltip.css';

interface ITooltipProps {
    content: React.ReactNode
    children: React.ReactNode
    anchorPosition?: string
}


const Tooltip: FC<ITooltipProps> = ({ content, children, anchorPosition }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isVisible && <div className={"tooltip " + (anchorPosition ?? "")}>{content}</div>}
        </div>
    );
};

export default Tooltip;
