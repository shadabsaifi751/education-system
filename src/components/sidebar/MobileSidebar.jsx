import React, { useState } from 'react';
import styles from "./sidebar.module.scss"
import { Link } from 'react-router-dom';
import navData from "../../utils/navList.json"

const MobileSidebar = () => {


    const [active,setActive] = useState();


    const SidebarHandle =(index)=>{
        setActive(index);
    }
    return (
        <div className={styles.mobile_sidebar_wrapper}>
            <div className={styles.mobile_sidebar}>
                <div>
                    {
                        navData && navData.map((item, key) => (
                            <Link to={item.route} key={key} className={`${styles.list} ${active === item._id ? `${styles.active}` : ""}`} onClick={() => SidebarHandle(item._id)}>
                                <i className={styles[item.iconName]}></i>
                                <p className={styles.title}>{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar