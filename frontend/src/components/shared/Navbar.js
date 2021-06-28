import { Link } from 'react-router-dom';
import sprocket from '../assets/logos/sprocket_text.png'
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <>
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to='/'><img src={sprocket} alt="bike sprocket" className={styles.logo}/></Link>
        <input className={styles.menu_btn} type="checkbox" id="menu_btn" />
        <label className={styles.menu_icon} htmlFor="menu_btn"><span className={styles.navicon}></span></label>
        <ul className={styles.menu}>
          <Link to='/results' className={styles.header_link}>Results</Link>
          <Link to='/venues' className={styles.header_link}>Venues</Link>
          <Link to='/about' className={styles.header_link}>About</Link>
        </ul>
      </header>
    </div>
    </>
  );
}