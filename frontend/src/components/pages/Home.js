import Carousel from "../carousel/Carousel"
import styles from './Home.module.css';


export default function Home() {
  return(
    <div className ={styles.size}>
      <Carousel/>
    </div>
  )
}