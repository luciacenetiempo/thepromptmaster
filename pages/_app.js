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
    <Script>
      {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PNQFCZCN');
      `}
    </Script>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QXT3DWCP13"></Script>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-QXT3DWCP13');
      `}
    </Script>
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
