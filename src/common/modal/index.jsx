import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./modal.module.scss"

const Modals = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const Submit=()=>{
    onClose()
  }

  return ReactDOM.createPortal(
    <div className={`${styles.popup_overlay} ${isOpen ? 'show' : ''}`}>
      <div className={`${styles.popup_content} ${isOpen ? 'isOpenPopup' : ''}`}>

        <div className={styles.modal_header}>
          <h4 className={styles.head_title}>{title ? title : "Create new assessment"}</h4>
          <button className={styles.close_button} onClick={onClose}><i className={styles.icon_close}></i></button>
        </div>
        <div className={styles.modal_body}>
          {children}
        </div>
        <div className={styles.modal_footer}>
          <button className={styles.save_button} onClick={Submit}>Save</button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modals;
