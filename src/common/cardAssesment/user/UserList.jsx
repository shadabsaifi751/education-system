import React from 'react';
import styles from "./userList.module.scss"

const UserList = () => {

    const users = [
        "LP", "RK", "CK", "CK", "FK"
    ]

    let displayText = [];
    let remainingCount = 0;

    if (users.length > 3) {
        displayText = users.slice(0, 3);
        remainingCount = users.length - 3;
    } else {
        displayText = users.join(', ');
    }


    console.log(displayText,"displayText")
    return (
        <ul className={styles.userList_wrap}>
            {
                displayText && displayText.map((item, key) => (
                    <li className={styles.user_item} key={key}>{item}</li>
                ))
            }
            {
                remainingCount > 0 && <span className={styles.total_count}>+{remainingCount}</span>
            }
        </ul>
    )
}

export default UserList