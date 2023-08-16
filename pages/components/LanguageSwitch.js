import { useState } from 'react';
import styles from './LanguageSwitch.module.css';

const LanguageSwitch = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState('ua');

  const handleLanguageToggle = () => {
    const newLanguage = language === 'ua' ? 'en' : 'ua';
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div className="language-switch">
      <label>
        <input type="checkbox" onChange={handleLanguageToggle} style={{display: "none"}} id="lang" />
        <span className="slider"></span>
      </label>
      <label id="language-text" className={styles.lang} htmlFor="lang">{language === 'ua' ? 'EN' : 'UA'}</label>
    </div>
  );
};

export default LanguageSwitch;
