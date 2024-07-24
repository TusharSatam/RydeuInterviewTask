import React from 'react'
import styles from "../HelpSupport.module.css"
import { liveChat, telegram, whatsApp } from '../../../assets/Images'

const ChatIcons = ({ isExpand, isCollapsing }) => {
    return (
        <div className={`${styles.IconContainer} ${!isExpand && isCollapsing ? styles.hidden : ''}`}>
            <div className={`${styles.chatIconWrapper} `}>
                <img src={telegram} alt="telegram" className={styles.chatIcon} />
                <span className={styles.socialName}>
                    Telegram
                </span>
            </div>
            <div className={`${styles.chatIconWrapper} `}>
                <img src={whatsApp} alt="whatsApp" className={styles.chatIcon} />
                <span className={styles.socialName}>
                    whatsApp
                </span>
            </div>
            <div className={`${styles.chatIconWrapper} `}>
                <img src={liveChat} alt="liveChat" className={styles.chatIcon} />
                <span className={styles.socialName}>
                    Live chat
                </span>
            </div>
        </div>
    )
}

export default ChatIcons
