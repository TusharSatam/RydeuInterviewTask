import React from 'react'
import styles from "./HelpSupport.module.css"
import { chatIcon, faqIcon, moboBgLayer, sendQueryIcon, socialIcon, travelGuideIcon } from '../../assets/Images'
import MiniCard from './components/MiniCard'
import Card from './components/Card'
const HelpSupport = () => {
  return (
    <div className={styles.helpSupportContainer}>
      {/* <div className={styles.bgLayerContainer}>
        <div className={styles.innerWrap}>
          <img src={Layer} alt="bgLayer" decoding='async' sizes='100vw' className={styles.bgLayer} />
        </div>
      </div> */}
      <div className={styles.backLayer}>
        <img src={moboBgLayer} alt="moboBgLayer" className={styles.moboBgLayer} sizes='100vw' />
      </div>
      <div className={styles.heading}>
        <h1>Hello, how can we help you?</h1>
        <h3>Find Travel guide, FAQ, chat,</h3>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.miniCardsWrapper}>
          <MiniCard icon={faqIcon} title="FAQ" description={"Lorem ipsum doolor sit amet"} />
          <MiniCard icon={travelGuideIcon} title="Travel Guide" description={"Lorem ipsum doolor sit amet"} />
        </div>
        <div className={styles.largeCardsWrapper}>
          <Card icon={chatIcon} title="Chat" description={"Lorem ipsum doolor sit amet"} />
          <Card icon={socialIcon} title="Social" description={"Lorem ipsum doolor sit amet"} />
          <Card icon={sendQueryIcon} title="Send Query" description={"Lorem ipsum doolor sit amet"} />
        </div>
      </div>
    </div>
  )
}

export default HelpSupport
