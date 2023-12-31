import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import styles from "./main.module.scss";
import Sidebar from '../sidebar/Sidebar';
import Desktop from '../dashboard';
import useWindowSize from '../../common/windowResize';
import MobileSidebar from '../sidebar/MobileSidebar';

export const CurrentStoreContext = createContext(null);

const Layout = () => {
    const windowSize = useWindowSize();
    const [isOpen, setIsOpen] = useState(false);
    const [isTabOpen, setIsTabOpen] = useState('MyAssessment');
    const [isExpend, setIsExpend] = useState(true);

    useEffect(() => {
        windowSize.width > 580 ? setIsExpend(false) : setIsExpend(true)
    }, [windowSize])

    return (

        <CurrentStoreContext.Provider
            value={{
                isOpen,
                setIsOpen,
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
