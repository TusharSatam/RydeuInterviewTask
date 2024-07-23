import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import {
    defaultProfileBlackIcon,
    defaultProfileIcon,
    deutschFlagIcon,
    hambargerIcon,
    helpIcon,
    LOGO,
    moboHambargerIcon,
} from '../../assets/Images';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLanguageListVisible, setIsLanguageListVisible] = useState(false);
    const languageListRef = useRef(null);

    const handleClickOutside = (event) => {
        if (languageListRef.current && !languageListRef.current.contains(event.target)) {
            setIsLanguageListVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navbarContainer}>
            <Link to='/'>
            <img src={LOGO} className={styles.logoStyle} height={36} width={86} alt="logo"/>
            </Link>
            <div className={styles.navlinks}>
                <Link className={styles.navlink}>
                    <img src={helpIcon} alt="Help Icon" height={18} width={18} />
                    Help
                </Link>
                <button
                    className={styles.navlink}
                    onClick={() => setIsLanguageListVisible(!isLanguageListVisible)}
                    aria-expanded={isLanguageListVisible}
                    aria-controls="language-list"
                >
                    <img src={deutschFlagIcon} alt="German Flag Icon" height={14} width={22} />
                    Deutsch&nbsp;&nbsp;|&nbsp;&nbsp;EUR
                </button>
                <Link className={styles.moboNavlink}>Open Requests</Link>
                {isLanguageListVisible && (
                    <div id="language-list" className={styles.languageList} ref={languageListRef}>
                        <div className={styles.listItem}>English</div>
                        <div className={styles.listItem}>Deutsch</div>
                        <div className={styles.listItem}>Español</div>
                        <div className={styles.listItem}>Français</div>
                        <div className={styles.listItem}>Italiano</div>
                        <div className={styles.listItem}>Dutch</div>

                    </div>
                )}
                <div className={styles.profileBtnWrappper}>
                    <button className={styles.profileBtn} aria-label="Profile">
                        <div className={styles.profileImgBg}>
                        <img src={defaultProfileIcon} alt="Default Profile Icon" />
                        </div>
                        <img src={hambargerIcon} alt="Menu Icon" className={styles.hambargerIcon}/>
                    </button>
                    <button className={styles.moboProfileBtn} aria-label="Mobile Profile">
                        <img src={defaultProfileBlackIcon} alt="Default Profile Black Icon" />
                        <img src={moboHambargerIcon} alt="Mobile Menu Icon" className={styles.hambargerIcon}/>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
