import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './EventSlider.module.css'

const EventSlider = ({ events, language }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {events.map((event, index) => (
        <div key={index} className={styles.event}>
          <img src={event.imageSrc} alt={event.title} className={styles.image} />
          <div className={styles.text}>
            <p className={styles.date}>{language === 'ua' ? event.dateUa : event.dateEn}</p>
            <h3>{language === 'ua' ? event.titleUa : event.titleEn}</h3>
            <p>{language === 'ua' ? event.descriptionUa : event.descriptionEn}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventSlider;
