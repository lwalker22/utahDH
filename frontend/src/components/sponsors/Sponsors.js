import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import styles from './Sponsors.module.css';

export default function Sponsors() {
  
  const apiDev = `http://localhost:1337`;
  const [svg, setSvg] = useState('');

  useEffect(() => {
    axios.get(apiDev + '/home')
      .then(res => {
        setSvg(res.data.sponsors);
      })
      .catch(err => {
        console.log(err);
      })
  }, [apiDev] );
  
  if (svg[0] === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return(
    <>
      <h3 className={styles.header}>
        2021 Series Sponsors
      </h3>
      <div className={styles.flex_display}>
        {svg.map((item, i) => (
          <Fragment key={i}>
            <a href={item.alternativeText}>
              <img src={apiDev + svg[i].url} alt={item.alternativeText} className={styles.svg_size} />
            </a>
          </Fragment>
        ))}
      </div>
    </>
  )
}