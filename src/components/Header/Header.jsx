import React, { useContext, useState } from 'react'
import styles from "./header.module.scss"
import useWindowSize from '../../common/windowResize'
import { CurrentStoreContext } from '../Layout';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { setIsOpen, setIsTabOpen, isTabOpen } = useContext(CurrentStoreContext);
    const windowSize = useWindowSize();
    const location = useLocation();

    // for open sidebar handle;

    const humbergarHandle = () => {
        setIsOpen(true)
    }

    // for tab handle render data;

    const tabHandle = (val) => {
        setIsTabOpen(val)
    }

    // console.log(location.pathname, "locationlocation")

    return (
        <React.Fragment>
            <header className={styles.header}>
                {
                    windowSize.width <= 992 && (
                        <div className={styles.humbergar} onClick={humbergarHandle}>
                            <i className={styles.humbergar_icon}></i>
                        </div>
                    )
                }
                <div className={styles.brand_logo}>
                    <a href="/" className={styles.brand}>Assessment</a>
                </div>
                <ul className={styles.nav_list}>
                    {windowSize.width > 768 && <li className={styles.list}>My Assessments</li>}
                    <li className={styles.Icons}>
                        {
                            windowSize.width > 768 ? (
                                <i className={styles.mobile_icon}></i>
                            ) : (
                                <i className={styles.desktop_icon}></i>
                            )
                        }
                    </li>
                </ul>
            </header>

            {
                location.pathname === "/assessment" && (
                    windowSize.width < 768 && (
                        <ul className={styles.navTab}>
                            <li className={`${styles.list} ${isTabOpen === "MyAssessment" ? `${styles.active}` : ""}`} onClick={() => tabHandle("MyAssessment")}>My Assessments</li>
                            <li className={`${styles.list} ${isTabOpen === "UnstopAssessment" ? `${styles.active}` : ""}`} onClick={() => tabHandle("UnstopAssessment")}>Unstop Assessments</li>
                        </ul>
                    )
                )
            }
        </React.Fragment>
    )
}

export default Header