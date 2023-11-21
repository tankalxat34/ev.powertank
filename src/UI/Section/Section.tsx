import React from "react";
import styles from "./Section.module.css";
import { ISection } from "../../interfaces/ISection";

export function SectionText(props: ISection): JSX.Element {
    return (
        <div className={styles.sectionText} {...props}>
            {props.children}
        </div>
    )
}

export default function Section(props: ISection): JSX.Element {
    return (
        <div className={styles.section}>
            {props.children}
        </div>
    );
}
