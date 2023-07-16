import React from 'react';
import styles from "./main.module.scss";
import Sidebar from '../sidebar/Sidebar';
import Desktop from '../dashboard';
import useWindowSize from '../../common/windowResize';
import MobileSidebar from '../sidebar/MobileSidebar';

const Layout = () => {

    const windowSize = useWindowSize();


    return (
        <div className={styles.header_layout}>
            {
                windowSize.width >= 992 ? (
                    <Sidebar />
                ) : (
                    <MobileSidebar />
                )
            }
            <Desktop />
        </div>
    )
}

export default Layout;
