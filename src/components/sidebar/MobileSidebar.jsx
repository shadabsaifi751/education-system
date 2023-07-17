import React, { useContext, useState } from 'react';
import styles from "./sidebar.module.scss"
import { Link, useLocation } from 'react-router-dom';
import navData from "../../utils/navList.json"
import { CurrentStoreContext } from '../Layout';

const MobileSidebar = () => {
    const { isOpen, setIsOpen } = useContext(CurrentStoreContext);
    const location = useLocation();
    const activePage = navData.find(item => item.route === location.pathname);
    const activePageId = activePage ? activePage._id : "";

    const [active, setActive] = useState(activePageId);


    // open handle for sidebar navigation.
    const SidebarHandle = (index) => {
        setActive(index);
        setIsOpen(false);
    }

    const outsideClick = () => {
        setIsOpen(false);
    }

    // close handle for sidebar navigation
    const closeSidebarHandle = () => {
        setIsOpen(false);
    }

    // console.log(activePageId, "location")

    return (
        <div className={`${styles.mobile_sidebar_wrapper} ${isOpen ? `${styles.show}` : ""}`} onClick={outsideClick}>
            <div className={styles.mobile_sidebar} onClick={(event) => event.stopPropagation()}>
                <div className={styles.nav_head}>
                    <p className={styles.menu_title}>Menu</p>
                    <button type='button' className={styles.close_button} onClick={closeSidebarHandle}>
                        <i className={styles.close_icon}></i>
                    </button>
                </div>
                <div className={styles.navigation}>
                    {
                        navData && navData.map((item, key) => (
                            <Link to={item.route} key={key} className={`${styles.navigation_items} ${active === item._id ? `${styles.active}` : ""}`} onClick={() => SidebarHandle(item._id)}>
                                <i className={styles[item.iconName]}></i>
                                <p className={styles.title}>{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
                <div className={styles.admin_wrap}>
                    <div className={styles.status}>
                        <i className={styles.round_Status}></i>
                        <Link to="#" className={styles.title}>Round Status</Link>
                    </div>
                    <div className={styles.button_wrap}>
                        <button type="button" className={styles.admin_button}>Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar