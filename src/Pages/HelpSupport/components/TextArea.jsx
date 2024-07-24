import React from 'react'
import styles from '../HelpSupport.module.css';
const TextArea = ({ label, id, value, handleChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={id}
                className={styles.textareaField}
                value={value}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}

export default TextArea
