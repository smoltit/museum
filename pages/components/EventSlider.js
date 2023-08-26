import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './EventSlider.module.css';
import Image from 'next/image';

const EventSlider = ({ events, language }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const newSlidesToShow = window.innerWidth < 700 ? 1 : 3;
    setSlidesToShow(newSlidesToShow);
  };

  useEffect(() => {
    // Initial setup
    updateSlidesToShow();

    // Listen for window resize events
    window.addEventListener('resize', updateSlidesToShow);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {events.map((event, index) => (
        <div key={index} className={styles.event}>
          <Image src={event.imageName} width='500' height='500' className={styles.image} />
          <div className={styles.text}>
            <p className={styles.date}>{event.date}</p>
            <h3>{language === 'ua' ? event.titleUa : event.titleEn}</h3>
            <p>{language === 'ua' ? event.descriptionUa : event.descriptionEn}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventSlider;
