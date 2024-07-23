import React from 'react'
import styles from "./HelpSupport.module.css"
import {faqIcon, Layer } from '../../assets/Images'
const HelpSupport = () => {
  return (
    <div className={styles.helpSupportContainer}>
      {/* <div className={styles.bgLayerContainer}>
        <div className={styles.innerWrap}>
          <img src={Layer} alt="bgLayer" decoding='async' sizes='100vw' className={styles.bgLayer} />
        </div>
      </div> */}
      <div className={styles.heading}>
        <h1>Hello, how can we help you?</h1>
        <h3>Find Travel guide, FAQ, chat,</h3>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.miniCardsWrapper}>
          <div className={styles.miniCard}>
            <img src={faqIcon} alt="faqIcon" className={styles.cardImage} />
            <div className={styles.minCardTexts}>
              <h3>FAQ</h3>
              <h4>Lorem ipsum doolor sit amet</h4>
            </div>
          </div>
          <div className={styles.miniCard}>
            <img src={faqIcon} alt="faqIcon" className={styles.cardImage} />
            <div className={styles.minCardTexts}>
              <h3>FAQ</h3>
              <h4>Lorem ipsum doolor sit amet</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpSupport
