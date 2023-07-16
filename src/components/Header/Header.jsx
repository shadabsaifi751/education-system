import React from 'react'
import styles from "./header.module.scss"
import useWindowSize from '../../common/windowResize'

const Header = () => {

    const windowSize = useWindowSize();

    console.log(windowSize.width, "windowSizewindowSizewindowSize")

    return (
        <header className={styles.header}>
            {
                windowSize.width <= 992 && (
                    <div className={styles.humbergar}>
                        <i className={styles.humbergar_icon}></i>
                    </div>
                )
            }
            <div className={styles.brand_logo}>
                <a href="#" className={styles.brand}>Assessment</a>
            </div>
            <ul className={styles.nav_list}>
                {windowSize.width >= 768 && <li className={styles.list}>My Assessments</li>}
                <li className={styles.Icons}>
                    {
                        windowSize.width >= 768 ? (
                            <i className={styles.mobile_icon}></i>
                        ) : (
                            <i className={styles.desktop_icon}></i>
                        )
                    }
                </li>
            </ul>
        </header>
    )
}

export default Header