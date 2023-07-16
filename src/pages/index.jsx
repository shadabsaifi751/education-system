import React, { useContext } from 'react';
import Overview from '../components/assessment/Overview';
import MyAssessments from '../components/assessment/MyAssessments';
import { CurrentStoreContext } from '../components/Layout';

const AssessmentPage = () => {
    const { isTabOpen } = useContext(CurrentStoreContext);
    return (
        <React.Fragment>
            {
                isTabOpen === "MyAssessment" ? (
                    <React.Fragment>
                        <Overview />
                        <MyAssessments />
                    </React.Fragment>
                ) : isTabOpen === "UnstopAssessment" ? (
                    <></>
                ) : (
                    <React.Fragment>
                        <Overview />
                        <MyAssessments />
                    </React.Fragment>
                )
            }

        </React.Fragment>
    )
}

export default AssessmentPage