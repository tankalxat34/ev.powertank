import React from "react";
import { IBadge, IBadgesDiv } from "../../interfaces/IBadge";
import './Badge.css'





const Badge: React.FC<IBadge> = ({ value, title, type }) => {
    return (
        <div className={`badge ${type}`}>
            {title && <span><b>{title && title.concat(":")}&nbsp;</b></span>}
            <span>{value}</span>
        </div>
    )
}

const BadgesDiv: React.FC<IBadgesDiv> = (props) => {
    return (
        <div className="badgesDiv">
            {props.children}
        </div>
    )
}

export { BadgesDiv };
export default Badge;