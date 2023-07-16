import React from 'react'
import Modals from '../../../common/modal'
import InputField from '../../../common/form/InputField';
import InputSelect from '../../../common/form/InputSelect';
import ChipInput from '../../../common/form/ChipInput';

const AddNewAssessment = ({ closePopup, isOpen }) => {

    const selectData = ["one", "two", "three"];

    return (
        <Modals isOpen={isOpen} onClose={closePopup}>
            <InputField
                placeholder="Type Here"
                label="Name of assessment"
            />
            <InputSelect
                label="Purpose of the test is"
                options={selectData}
                value="Select"
            />
            <InputSelect
                label="Description"
                options={selectData}
                value="Select"
            />
            <ChipInput />
            <InputField
                type="time"
                placeholder="HH:MM:SS"
                label="Duration of assessment"
            />
        </Modals>
    )
}

export default AddNewAssessment;