import { useEffect, useState } from 'react';
import axios from 'axios';

import arrow_right from '../assets/icons/arrow-right-circle-white.svg';
import arrow_left from '../assets/icons/arrow-left-circle-white.svg';
import arrow_left_white from '../assets/icons/arrow-left-circle-black.svg';



import styles from './Carousel.module.css';

export default function Carousel() {
  
  const apiDev = `http://localhost:1337`;
  const [imgs, setImgs] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get(apiDev + '/home')
      .then(res => {
        setImgs(res.data.carousel);
      })
      .catch(err => {
        console.log(err);
      })
  }, [apiDev] );

  const dec = () => {
    if (index === 0) {
      return;
    } else {
      setIndex(index -1);
    }
  }

  const inc = () => {
    if (index < imgs.length -1) {
      setIndex(index + 1);
    } else if ( index === imgs.length - 1) {
      setIndex(0)
    }
  }
  
  if (imgs[0] === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return(
    <section className={styles.background}>
      <div className={styles.container}>
        {
          index === 0
            ? <button className ={styles.button_start}>
                <img src={arrow_left_white} alt='white left arrow'/>
              </button>
            : <button className ={styles.button} onClick={dec} >
                <img src={arrow_left} alt='left arrow'/>
              </button>
        }
        <img 
          className={styles.img_size}
          src={apiDev + imgs[index].url} 
          alt={imgs[index].title}
        />
        <button className ={styles.button} onClick={inc}>
          <img src={arrow_right} alt='right arrow'/>
        </button>
      </div>
    </section>
  )
}