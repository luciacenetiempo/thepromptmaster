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
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
    }
  }, [cookies]);

  return (

    <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QXT3DWCP13"></Script>
    <Script id="google-analytics">
      {`

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}

        gtag('js', new Date());
      
        gtag('config', 'G-QXT3DWCP13');


        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
        
      `}
    </Script>
      <Component {...pageProps} />
      {!hasCookie ? (<CookieBanner />) : ('')}
    </>
  )
  
}
