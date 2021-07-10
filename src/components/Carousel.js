import background1 from '../images/background1.jpeg'
import background2 from '../images/background2.jpeg'
import background3 from '../images/background3.jpeg'
import background4 from '../images/background4.jpeg'

import { useState } from 'react';

const Carousel = () => {
  const images = [
    {
      title: 'Ceramics and Fruits',
      img: background1
    },
    {
      title: 'Making Ceramics',
      img: background2
    },
    {
      title: 'Minimalist Plate',
      img: background3
    },
    {
      title: 'Making Ceramics B&w',
      img: background4
    },
  ]

  const [ index, setIndex ] = useState(0);

  const slideLeft= () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  }

  const slideRight= () => {
    setIndex((index + 1) % images.length); 
  }

  return (
    <div className="Carousel">
      <button className='carousel-left' onClick={slideLeft}>{'<'}</button>
      <img src={images[index].img} alt={images[index].title}/>
      <button className='carousel-right' onClick={slideRight}>{'>'}</button>
    </div>
  );
}
 
export default Carousel;