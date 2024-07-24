import React from 'react';
import styles from '../HelpSupport.module.css';

const Input = ({ label, id, type, value, handleChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                className={styles.inputField}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
