import React from "react";
import styles from "./error.module.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export default function ErrorPage() {
    return (
        <>
            <div className={styles.errorPage}>
                <h1><code>404</code></h1>
                <p>Упс! Такой страницы не существует.</p>
                <Link to={"/"}>
                    На главную
                </Link>
            </div>
            <Footer />
        </>
    );
}