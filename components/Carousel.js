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
            <div className={styles.carousel__nav}>
              <span className={`${styles.carousel__nav__button} prev`}>
                <div className="sr-only">Prev Slide</div>
                <svg className="w-3 h-3 fill-current" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7l45.2 45.3-22.6 22.6-89.4 89.4H448v64H125.3l89.4 89.4 22.5 22.6-45.2 45.3-22.6-22.6-144-144z"></path></svg>
              </span>
              <span className={`${styles.carousel__nav__button} next`}>
                <div className="sr-only">Next Slide</div>
                <svg className="w-3 h-3 fill-current" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M422.6 278.6l22.7-22.6-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6 89.4 89.4H0v64h322.7l-89.4 89.4-22.5 22.6 45.2 45.3 22.6-22.6 144-144z"></path></svg>
              </span>
            </div>
          </div>
          <div className={styles.carousel__slide}>
            <Swiper
              className={`${styles.carousel__slider} sliderCarousel`}
              loop={true}
              slidesPerGroupSkip={1}
              spaceBetween={0}
              slidesPerView={1.2}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}  // Specifica i moduli
              onSwiper={(swiper) => {
                swiper.navigation.update(); // Aggiorna la navigazione per assicurarsi che sia correttamente impostata
              }}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2.5,
                },
              }}
            >
              {props.list.slice(0, 26).map((post, index) => (
                
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