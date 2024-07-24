import React from 'react'
import styles from "../HelpSupport.module.css"
import { facebook, instagram, linkedIn, twitter } from '../../../assets/Images'

const SocialIcons = ({ isExpand, isCollapsing }) => {
    return (
        <div className={`${styles.IconContainer} ${!isExpand && isCollapsing ? styles.hidden : ''}`}>
            <div className={`${styles.socialIconWrapper}`}>
                <img src={facebook} alt="facebook" className={styles.socialIcon} />
            </div>
            <div className={`${styles.socialIconWrapper}`}>
                <img src={instagram} alt="instagram" className={styles.socialIcon} />
            </div>
            <div className={`${styles.socialIconWrapper}`}>
                <img src={twitter} alt="twitter" className={styles.socialIcon} />
            </div>
            <div className={`${styles.socialIconWrapper}`}>
                <img src={linkedIn} alt="linkedIn" className={styles.socialIcon} />
            </div>
        </div>
    )
}

export default SocialIcons
