import React, { useState, useEffect } from 'react';
import styles from "../HelpSupport.module.css";
import { expandDownIcon, facebook, instagram, linkedIn, liveChat, telegram, twitter, upArrowIcon, whatsApp } from '../../../assets/Images';
import ChatIcons from './ChatIcons';
import SocialIcons from './SocialIcons';
import QueryForm from './QueryForm';

const Card = ({ icon, title, description }) => {
    const [isExpand, setIsExpand] = useState(false);
    const [isCollapsing, setIsCollapsing] = useState(false);

    useEffect(() => {
        if (!isExpand) {
            setIsCollapsing(true);
            const timer = setTimeout(() => {
                setIsCollapsing(false);
            }, 300); // Duration of the opacity transition
            return () => clearTimeout(timer);
        }
    }, [isExpand]);

    return (
        <div className={styles.Card}>
            <div className={styles.cardDetails}>
                <img src={icon} alt="cardIcon" className={styles.cardImage} />
                <div className={styles.cardTexts}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <h4 className={styles.cardDesc}>{description}</h4>
                </div>
                <button onClick={() => setIsExpand(!isExpand)} className={styles.expandToggleBtn}>
                    <img
                        src={expandDownIcon}
                        alt="expandDownIcon"
                        className={`${styles.expandDownIcon} ${isExpand ? styles.rotate : ''}`}
                    />
                </button>
            </div>
            <div className={`${styles.expandSection} ${title==="Send Query"?styles.autoHeight:""} ${isExpand ? styles.show : (isCollapsing ? '' : styles.hide)}`}>
                {title === "Chat" ?
                    <ChatIcons isExpand={isExpand} isCollapsing={isCollapsing} /> :
                    title === "Social" ?
                        <SocialIcons isExpand={isExpand} isCollapsing={isCollapsing} /> : <QueryForm isExpand={isExpand} isCollapsing={isCollapsing} />
                }
            </div>
        </div>
    );
}

export default Card;
