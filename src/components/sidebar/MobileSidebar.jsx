import React, { useContext, useState } from 'react';
import styles from "./sidebar.module.scss"
import { Link } from 'react-router-dom';
import navData from "../../utils/navList.json"
import { CurrentStoreContext } from '../Layout';

const MobileSidebar = () => {

    const { isOpen, setIsOpen, sidebarRef } = useContext(CurrentStoreContext);
    const [active, setActive] = useState();


    const SidebarHandle = (index) => {
        setActive(index);
        setIsOpen(false);
    }

    const closeSidebarHandle = () => {
        setIsOpen(false);
    }

    return (
        <div className={`${styles.mobile_sidebar_wrapper} ${isOpen ? `${styles.show}` : ""}`} >
            <div ref={sidebarRef} className={styles.mobile_sidebar}>
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