import React from 'react';
import styles from "./cardAssesment.module.scss"
import UserList from './user/UserList';

export const CardAssesment = ({ title, subTitle, }) => {
    return (
        <div className={styles.card_assesment_wraper}>
            <div className={styles.card_body}>
                <div className={styles.body}>
                    <i className={styles.icon_assessment}></i>

                    <div className={styles.content}>
                        <h3 className={styles.title}>Math Assessment</h3>
                        <h4 className={styles.subTitle}>Job <span className={styles.calendar}><i className={styles.icon_calendar}></i>20 Apr 2023</span></h4>
                    </div>
                </div>
                <button type="button" className={styles.button_dots}><i className={styles.icon_dots}></i></button>
            </div>
            <div className={styles.card_footer}>
                <div className={styles.duration_wrap}>
                    <div>
                        <time className={styles.duration_time}>00</time> <br />
                        <p className={styles.duration_title}>Duration</p>
                    </div>
                    <div>
                        <time className={styles.duration_time}>00</time> <br />
                        <p className={styles.duration_title}>Duration</p>
                    </div>
                </div>
                <div className={styles.userList_wrap}>
                    <button type="button" className={styles.share_button}><i className={styles.icon_atteched}></i>Share</button>

                    <UserList />
                </div>
            </div>
        </div>
    )
}
