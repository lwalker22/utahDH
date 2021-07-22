import Carousel from "../carousel/Carousel";
import Sponsors from "../sponsors/Sponsors";
import styles from './Home.module.css';


export default function Home() {
  return(
    <div className={styles.side_by_side}>
      <div >
        <Carousel/>
      </div>
      <div>
        <Sponsors/>
      </div>
    </div>
  )
}