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
    // State to manage the visibility of the language list dropdown
    const [isLanguageListVisible, setIsLanguageListVisible] = useState(false);
    // State to manage the visibility of the language list dropdown
    const languageListRef = useRef(null);
    // Handle click outside of the language list to close it
    const handleClickOutside = (event) => {
        if (languageListRef.current && !languageListRef.current.contains(event.target)) {
            setIsLanguageListVisible(false);
        }
    };
    // Set up event listener for clicks outside the language list on component mount
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={styles.navbarContainer}>
            {/* Logo */}
            <Link to='/'>
                <img src={LOGO} className={styles.logoStyle} height={36} width={86} alt="logo" />
            </Link>
            <div className={styles.navlinks}>
                {/* Help link */}
                <Link className={styles.navlink}>
                    <img src={helpIcon} alt="Help Icon" height={18} width={18} />
                    Help
                </Link>
                {/* Language selector button */}
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
                {/* Language list dropdown */}
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
                {/* Profile button wrapper for desktop and mobile */}
                <div className={styles.profileBtnWrappper}>
                    <button className={styles.profileBtn} aria-label="Profile">
                        <div className={styles.profileImgBg}>
                            <img src={defaultProfileIcon} alt="Default Profile Icon" />
                        </div>
                        <img src={hambargerIcon} alt="Menu Icon" className={styles.hambargerIcon} />
                    </button>
                    <button className={styles.moboProfileBtn} aria-label="Mobile Profile">
                        <img src={defaultProfileBlackIcon} alt="Default Profile Black Icon" />
                        <img src={moboHambargerIcon} alt="Mobile Menu Icon" className={styles.hambargerIcon} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
