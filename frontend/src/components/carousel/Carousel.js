import { useEffect, useState } from 'react';
import axios from 'axios';

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
    if(index <= 0) {
      return;
    } else {
      setIndex(index - 1);
    }
  }

  const inc = () => {
    if (index < imgs.length -1) {
      setIndex(index + 1);
    } else if ( index === imgs.length - 1) {
      setIndex(0)
      console.log("condition met")
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
    <>
      <div>
      {
        index === 0
          ? 
            <> </>
          : 
            <button onClick={dec}>
              previous
            </button>
      }
        <img src={apiDev + imgs[index].url} alt={imgs[index].title}/>
        <button onClick={inc}>
          next
        </button>
      </div>
    </>
  )
}