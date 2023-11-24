import React from 'react';
import styles from './Select.module.css';

interface ISelectOption extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
    name: string | JSX.Element
}


interface ISelect extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    options: ISelectOption[]
}

const Select: React.FC<ISelect> = (props) => {
    return <>
        <select className={styles.select} name={props.name} id={props.name} defaultValue={0}>
            {props.options && props.options.map((value: ISelectOption, index: number) => {
                return <option value={index} key={index}>{value.name}</option>
            })}
        </select>
    </>
}

export default Select;