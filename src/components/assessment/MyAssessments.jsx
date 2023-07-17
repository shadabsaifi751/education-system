import React, { useContext, useState } from 'react';
import styles from "./myAssessment.module.scss";
import useWindowSize from '../../common/windowResize';
import UploadAssessment from '../../common/uploadAssessment/UploadAssessment';
import { CardAssesment } from '../../common/cardAssesment/CardAssesment';
import { CurrentStoreContext } from '../Layout';
import AddNewAssessment from './popup/AddNewAssessment';
import AssessmentList from "../../utils/assessmentList.json"

const MyAssessments = () => {
  const { setIsExpend, isExpend } = useContext(CurrentStoreContext);
  const windowSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  // popup open handle
  const openPopup = () => {
    setIsOpen(true);
  };

  //popup close handle
  const closePopup = () => {
    setIsOpen(false);
  };

  const openChatHandle = () => {
    setIsExpend(!isExpend)
  }



  return (
    <React.Fragment>
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
                <button type='button' className={`${styles.button_group} ${!isExpend ? `${styles.isActive}` : ""}`} onClick={openChatHandle}>
                  <i className={styles.icon_info}></i>
                </button>
              </div>
            )
          }
        </div>

        <div className={styles.assessment_list}>
          <UploadAssessment onClick={openPopup} />
          {
            AssessmentList && AssessmentList.map((item,key) =>(
              <CardAssesment Item={item} key={key}/>
            ))
          }
        </div>
      </div>
      <button className={styles.add_assessment_button} onClick={openPopup}><i className={styles.icon_plus}></i></button>
      <AddNewAssessment closePopup={closePopup} isOpen={isOpen}/>
    </React.Fragment>
  )
}

export default MyAssessments