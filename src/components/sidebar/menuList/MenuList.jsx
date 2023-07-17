import React, { useState } from 'react'
import navData from "../../../utils/navList.json";
import styles from "./menuList.module.scss"
import { Link, useLocation } from 'react-router-dom';

const MenuList = () => {
    const location = useLocation();
    const activePage = navData.find(item => item.route === location.pathname);
    const activePageId = activePage ? activePage._id : "";

    const [active, setActive] = useState(activePageId)

    const NavigateHandle = (index) => {
        setActive(index);
    }

    return (
        <div className={styles.nav_list}>
            {
                navData && navData.map((item, key) => (
                    <Link to={item.route} key={key} className={`${styles.list} ${active === item._id ? `${styles.active}` : ""}`} onClick={() => NavigateHandle(item._id)}>
                        <i className={styles[item.iconName]}></i>
                        <p className={styles.title}>{item.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default MenuList