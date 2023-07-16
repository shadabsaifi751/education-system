import React from 'react';
import styles from "./assessments.module.scss"
import assesmentData from "../../utils/assessmentsOverview.json"
import { useState } from 'react';
import { useEffect } from 'react';

const Assessments = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });


    // for screen size conditional handle state and components

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div className={styles.assessments_wrapper}>
            {
                windowSize.width > 992 && <h2 className={styles.title}>Assessments Overview</h2>
            }


            <ul className={styles.total_score_wrap}>
                {
                    assesmentData && assesmentData.map((item, key) => (
                        <li className={styles.total_score_list} key={key}>
                            <h5 className={styles.total_title}>{item.title}</h5>
                            <ul className={styles.collection_list}>
                                {
                                    item.collection && item.collection.map((subItem, subKey) => (
                                        <li className={styles.counter_wrapper} key={subKey}>
                                            <div className={`${styles.icons} ${styles[subItem.icon]}`}>
                                                <i className={styles[subItem.icon]}></i>
                                            </div>
                                            <div className={`${styles.icon_wrap}`}>
                                                <h3 className={styles.count_title}>{subItem.count} <span className={styles.badge}>{subItem.badge}</span></h3>
                                                <p className={styles.subtitle}>{subItem.name}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Assessments;