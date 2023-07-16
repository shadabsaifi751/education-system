import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import styles from "./main.module.scss";
import Sidebar from '../sidebar/Sidebar';
import Desktop from '../dashboard';
import useWindowSize from '../../common/windowResize';
import MobileSidebar from '../sidebar/MobileSidebar';
import { useDetectOutsideClick } from '../../common/detectOutside/useDetectOutsideClick';

export const CurrentStoreContext = createContext(null);

const Layout = () => {
    const sidebarRef = useRef(null);
    const windowSize = useWindowSize();
    const [isOpen, setIsOpen] = useDetectOutsideClick(sidebarRef, false);
    const [isTabOpen, setIsTabOpen] = useState('MyAssessment');
    const [isExpend, setIsExpend] = useState(true);

    // console.log(isOpen,sidebarRef, "sidebar")

    useEffect(() => {
        windowSize.width > 580 ? setIsExpend(false) : setIsExpend(true)
    }, [windowSize])

    return (

        <CurrentStoreContext.Provider
            value={{
                isOpen,
                setIsOpen,
                sidebarRef,
                setIsTabOpen,
                isTabOpen,
                setIsExpend,
                isExpend
            }}
        >
            <div className={styles.header_layout}>
                {
                    windowSize.width > 992 ? (
                        <Sidebar />
                    ) : (
                        <MobileSidebar />
                    )
                }
                <Desktop />
            </div>
        </CurrentStoreContext.Provider>
    )
}

export default Layout;
