"use client"
import React, { useRef, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import PostTileBig from './PostTileBig';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/Carousel.module.scss'

const Carousel = (props) => {

  return (
    <div className='collection-list-wrapper fixedHeight'>
      <div className={styles.carousel}>
        <div className={styles.carousel__row}>
          <div className={styles.carousel__text}>
            <span className="phrase">
              <span className='bullet'>&#8226;</span> {props.section}{props.icon ? <span className='icon icon--noanimation'>{props.icon}</span> : ''}
            </span>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.carousel__slide}>
            <Swiper
              ref={swiperRef}
              className={`${styles.carousel__slider} sliderCarousel`}
              loop={true}
              slidesPerGroupSkip={1}
              spaceBetween={20}
              slidesPerView={2.5}
              navigation={{
                prevEl: prevRef.current, // Collega i pulsanti di navigazione
                nextEl: nextRef.current
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}  // Specifica i moduli
              onSwiper={(swiper) => {
                swiper.navigation.update(); // Aggiorna la navigazione per assicurarsi che sia correttamente impostata
              }}
            >
              {props.list.slice(0, 6).map((post, index) => (
                <SwiperSlide key={index}>
                  <PostTileBig post={post} isCategory={post._embedded['wp:term'][0][0]} role="listitem"/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;