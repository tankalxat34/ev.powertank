import React from "react";
import styles from "./Section.module.css";
import { ISection } from "../../interfaces/ISection";

export default function Section(props: ISection): JSX.Element {
    return (
        <div className={styles.section}>
            {props.children}
        </div>
    );
}
