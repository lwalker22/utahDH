import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown"

import styles from './About.module.css';

export default function About() {
  
  const apiDev = `http://localhost:1337`;
  const [desc, setDesc] = useState('');
  const [imgs, setImgs] = useState('');

  useEffect(() => {
    axios.get('http://localhost:1337/about')
      .then(res => {
        setDesc(res.data.description);
        setImgs(res.data.images);
      })
      .catch(err => {
        console.log(err);
      })
  }, [] );

  console.log(imgs)

  if (imgs[0] === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return(
    <>
      <div className={styles.text}>
        <ReactMarkdown children={desc}/>
      </div>
      <div className={styles.img_container}>
        <img src={apiDev + imgs[0].url} alt={imgs[0].title} className={styles.img}/>
        <img src={apiDev + imgs[1].url} alt={imgs[1].title} className={styles.img}/>
      </div>
      {/* <div>
        {imgs.map((i) => (
          <img src={apiDev + imgs[i].url} alt={imgs[i].name} />  
        ))}
      </div> */}
    </>
  )
}