import React, { useState } from 'react';
import styles from '../HelpSupport.module.css';
import { toast } from 'react-toastify';
import Input from './Input';
import TextArea from './TextArea';

const QueryForm = ({ isExpand, isCollapsing }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        orderNumber: '',
        query: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.query) {
            toast.error("Please fill in all required fields.")
            return;
        }
        toast.success("Your query has been submitted successfully!")
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
                    <Input
                        label="Name"
                        id="name"
                        type="text"
                        value={formData.name}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        value={formData.email}
                        handleChange={handleChange}
                    />
                </div>
                <div className={styles.miniInputs}>
                    <Input
                        label="Subject"
                        id="subject"
                        type="text"
                        value={formData.subject}
                        handleChange={handleChange}
                    />
                    <Input
                        label="Order no."
                        id="orderNumber"
                        type="text"
                        value={formData.orderNumber}
                        handleChange={handleChange}
                    />
                </div>
                <div className={styles.textareaContainer}>
                    <TextArea
                        label="Your Query"
                        id="query"
                        value={formData.query}
                        handleChange={handleChange}
                    />
                </div>
                <button type="submit" className="formSubmitBtn">Submit</button>
            </form>
        </div>
    );
};

export default QueryForm;
