import styles from './Footer.module.css';
import mailLogo from '../assets/icons/mail.svg';
import instagramLogo from '../assets/icons/instagram.svg';
import facebookLogo from '../assets/icons/facebook.svg';

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_items}>
          <h5 className={styles.spacing}>Contact</h5>
          <a href = "mailto:  info@utahdh.org">
            <img src={mailLogo} alt='mail'></img>
          </a>
        </div>
        <div className={styles.right_items}>
          <h5 className={styles.spacing}>Social</h5>
          <a href="https://www.facebook.com/utahgravityseries">
            <img src={instagramLogo} alt='instagram' className={styles.spacing}></img>
          </a>
          <a href="https://www.instagram.com/utahgravityseries/?hl=en">
            <img src={facebookLogo} alt='facebook'></img>
          </a>
        </div>
      </div>
    </>
  )
}