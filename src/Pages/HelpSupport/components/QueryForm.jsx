import React, { useState } from 'react';
import styles from '../HelpSupport.module.css';
import { toast } from 'react-toastify';

const QueryForm = ({ isExpand, isCollapsing }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        orderNumber: '',
        query: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.query) {
            setErrorMessage('Please fill in all required fields.');
            toast.error("Please fill in all required fields.")
            return;
        }
        setSuccessMessage('Your query has been submitted successfully!');
        toast.success("Your query has been submitted successfully!")
        setErrorMessage('');
        // Clear form
        setFormData({
            name: '',
            email: '',
            subject: '',
            orderNumber: '',
            query: ''
        });
    };

    return (
        <div className={`${styles.contactFormWrapper} ${!isExpand && isCollapsing ? styles.hidden : ''}`}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.miniInputs}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className={styles.inputField}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={styles.inputField}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.miniInputs}>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={styles.inputField}
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="orderNumber">Order no.</label>
                        <input
                            type="text"
                            id="orderNumber"
                            name="orderNumber"
                            className={styles.inputField}
                            value={formData.orderNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.textareaContainer}>
                    <div className={styles.formGroup} >
                        <label htmlFor="query">Your Query</label>
                        <textarea
                            id="query"
                            name="query"
                            className={styles.textareaField}
                            value={formData.query}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default QueryForm;
