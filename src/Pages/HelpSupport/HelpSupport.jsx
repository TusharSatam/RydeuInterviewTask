import React from 'react'
import styles from "./HelpSupport.module.css"
import { chatIcon, faqIcon, moboBgLayer, sendQueryIcon, socialIcon, travelGuideIcon } from '../../assets/Images'
import MiniCard from './components/MiniCard'
import Card from './components/Card'
const HelpSupport = () => {
  return (
    <div className={styles.helpSupportContainer}>

      {/* Background layer for mobile view */}
      <div className={styles.backLayer}>
        <img src={moboBgLayer} alt="moboBgLayer" className={styles.moboBgLayer} sizes='100vw' />
      </div>

      {/* Header section */}
      <div className={styles.heading}>
        <h1>Hello, how can we help you?</h1>
        <h3>Find Travel guide, FAQ, chat,</h3>
      </div>

      {/* Cards container */}
      <div className={styles.cardsContainer}>

        {/* Wrapper for smaller cards */}
        <div className={styles.miniCardsWrapper}>
          {/* MiniCard components for FAQ and Travel Guide */}
          <MiniCard icon={faqIcon} title="FAQ" description={"Lorem ipsum doolor sit amet"} />
          <MiniCard icon={travelGuideIcon} title="Travel Guide" description={"Lorem ipsum doolor sit amet"} />
        </div>

        {/* Wrapper for larger cards */}
        <div className={styles.largeCardsWrapper}>
          {/* Card components for Chat, Social, and Send Query */}
          <Card icon={chatIcon} title="Chat" description={"Lorem ipsum doolor sit amet"} />
          <Card icon={socialIcon} title="Social" description={"Lorem ipsum doolor sit amet"} />
          <Card icon={sendQueryIcon} title="Send Query" description={"Lorem ipsum doolor sit amet"} />
        </div>

      </div>
    </div>
  )
}

export default HelpSupport
