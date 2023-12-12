import '@/styles/globals.css'
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';
import { useCookies } from 'react-cookie';

import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [hasCookie, setHasCookie] = useState(false);
  useEffect(() => {
    if (cookies.CookieAccepted) {
      setHasCookie(true)
    }
  }, [cookies]);

  return (

    <>
      <Component {...pageProps} />
      {!hasCookie ? (<CookieBanner />) : ('')}
    </>
  )
  
}
