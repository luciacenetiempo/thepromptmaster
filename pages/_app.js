import '@/styles/globals.css'
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';
import { useCookies } from 'react-cookie';

import { initGA, logPageView } from '@/lib/analytics';
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [hasCookie, setHasCookie] = useState(false);
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
    if (cookies.CookieAccepted) {
      setHasCookie(true)
    }
  }, [cookies]);

  return (

    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2302004936713476"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
      {!hasCookie ? (<CookieBanner />) : ('')}
    </>
  )
  
}
