import React, { useContext } from 'react';
import styles from "./myAssessment.module.scss";
import useWindowSize from '../../common/windowResize';
import UploadAssessment from '../../common/uploadAssessment/UploadAssessment';
import { CardAssesment } from '../../common/cardAssesment/CardAssesment';
import { CurrentStoreContext } from '../Layout';

const MyAssessments = () => {
  const { setIsExpend, isExpend } = useContext(CurrentStoreContext);
  const windowSize = useWindowSize();

  const openChatHandle = () => {
    setIsExpend(!isExpend)
  }

  return (
    <div className={styles.my_assessment_wrapper}>
      <div className={styles.assessment_head}>
        <h2 className={styles.title}>My Assessment</h2>
        {
          windowSize.width < 580 && (
            <div className={styles.icon_wrap}>
              <button type='button' className={styles.button_group}>
                <i className={styles.icon_serach}></i>
              </button>
              <button type='button' className={styles.button_group}>
                <i className={styles.icon_filter}></i>
              </button>
              <button type='button' className={`${styles.button_group} ${!isExpend ? `${styles.isActive}`:""}`} onClick={openChatHandle}>
                <i className={styles.icon_info}></i>
              </button>
            </div>
          )
        }
      </div>

      <div className={styles.assessment_list}>
        <UploadAssessment />
        <CardAssesment />
        <CardAssesment />
      </div>
    </div>
  )
}

export default MyAssessments