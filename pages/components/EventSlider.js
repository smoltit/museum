import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './EventSlider.module.css';
import Image from 'next/image';
import moment from 'moment/moment';
import 'moment/locale/uk';

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
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const isEventInPast = (event) => {
    const eventDate = new Date(event.dateEnd);
    const currentDate = new Date();
    return eventDate < currentDate;
  };
  const formatEventDateRange = (event) => {
    const dateStartFormatted = moment(event.dateStart).format('D MMMM'); // Adjust the format as needed
    const dateEndFormatted = moment(event.dateEnd).format('D MMMM YYYY'); // Adjust the format as needed
    return `${dateStartFormatted} - ${dateEndFormatted}`;
  };

  language === 'ua' ? moment.locale('uk') : moment.locale('en');

  return (
    <Slider {...settings} className={styles.slider}>
      {events.map((event, index) => (
        <div key={index} className={`${styles.event} ${isEventInPast(event) ? styles.past : ''}`}>
          <Image src={`${event.imageName}`} width='500' height='500' className={styles.image} />
          <div className={styles.text}>
            <p className={styles.date}>{formatEventDateRange(event)}</p>
            <h3>{language === 'ua' ? event.titleUa : event.titleEn}</h3>
            <p>{language === 'ua' ? event.descriptionUa : event.descriptionEn}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default EventSlider;
