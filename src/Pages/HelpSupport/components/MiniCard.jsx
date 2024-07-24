import React from 'react'
import styles from "../HelpSupport.module.css"
import { navigateIcon } from '../../../assets/Images'

const MiniCard = ({ icon, title, description }) => {
    return (
        <div className={styles.miniCard}>
            <img src={icon} alt="faqIcon" className={styles.cardImage} />
            <div className={styles.cardTexts}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <h4 className={styles.cardDesc}>{description}</h4>
            </div>
            <img src={navigateIcon} alt="navigate" className={styles.navigateIcon} />
        </div>
    )
}

export default MiniCard
