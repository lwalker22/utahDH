import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Carousel() {
  
  const apiDev = `http://localhost:1337`;
  const [imgs, setImgs] = useState('');

  useEffect(() => {
    axios.get(apiDev + '/home')
      .then(res => {
        setImgs(res.data.carousel);
      })
      .catch(err => {
        console.log(err);
      })
  }, [apiDev] );

  if (imgs[0] === undefined) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return(
    <>
      <div>
        { 
          Object.keys(imgs).map((item, i) => (
            <>
              <img key={i} src={apiDev + imgs[item].url} alt={imgs[item].title}/>
            </>
          ))
        } 
      </div>
    </>
  )
}