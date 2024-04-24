"use client";
import CookieBanner from './CookieBanner';
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react';

const UtilityCookies = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [hasCookie, setHasCookie] = useState(false);
  useEffect(() => {
    if (cookies.CookieAccepted && !hasCookie) {
      setHasCookie(true)
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
  }, [cookies]);

  return !hasCookie ? (<CookieBanner />) : ('')
};

export default UtilityCookies;
