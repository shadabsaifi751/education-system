import React, { useContext } from 'react';
import styles from "./overview.module.scss"
import assesmentData from "../../utils/assessmentsOverview.json"
import { useState } from 'react';
import { useEffect } from 'react';
import useWindowSize from '../../common/windowResize';
import { CurrentStoreContext } from '../Layout';

const Overview = () => {
    const windowSize = useWindowSize();
    const { isExpend } = useContext(CurrentStoreContext);

    return (
        <div className={`${styles.assessments_wrapper} ${!isExpend ? `${styles.isActive}` : ""}`}>
            {
                windowSize.width > 580 && <h2 className={styles.title}>Assessments Overview</h2>
            }
            <ul className={`${styles.total_score_wrap}`}>
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


export default Overview;