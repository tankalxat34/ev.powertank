import React from "react";
import { IBadge } from "../../interfaces/IBadge";
import './Badge.css'

const Badge: React.FC<IBadge | any> = ({ value, key, type }) => {
    return (
        <div className='badge'>
            {key &&<span>{key}:</span> }
            <span>{value}</span>
        </div>
    )
}


export default Badge;