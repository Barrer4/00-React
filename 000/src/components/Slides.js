import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//Images
import Clothes from '../components/images/carousel/clothes.jpg';
import Phone from '../components/images/carousel/phone.jpg';
import Shoes from '../components/images/carousel/shoes.jpg';
import Food from '../components/images/carousel/food.jpg';
import Mix from '../components/images/carousel/mix.jpg';

function Slides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let url = 'https://dummyjson.com/quotes/random';
  let [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchQuote() {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setQuote(res.quote);
        });
    }
    fetchQuote();
  }, [index]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={Clothes} alt="First slide" />
        <Carousel.Caption>
          <h5>{quote}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Phone} alt="Second slide" />

        <Carousel.Caption>
          <h5>{quote}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Shoes} alt="Third slide" />

        <Carousel.Caption>
          <h5>{quote}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Food} alt="Third slide" />

        <Carousel.Caption>
          <h5>{quote}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Mix} alt="Third slide" />

        <Carousel.Caption>
          <h5>{quote}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
