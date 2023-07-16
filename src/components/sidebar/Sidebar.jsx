import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./sidebar.module.scss";
import MenuList from './menuList/MenuList';


const Sidebar = () => {
    
    return (
        <aside className={styles.sidebar}>
            <MenuList />
            <div className={styles.button_wrap}>
                <button type="button" className={styles.admin_button}>Admin</button>
            </div>
            <div className={styles.status}>
                <i className={styles.round_Status}></i>
                <Link to="#" className={styles.title}>Round <br /> Status</Link>
            </div>
        </aside>
    )
}

export default Sidebar