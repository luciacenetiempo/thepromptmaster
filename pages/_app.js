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

  return hasCookie ? (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QXT3DWCP13"
        strategy="afterInteractive"
      />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2302004936713476"
        crossorigin="anonymous"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-QXT3DWCP13');
        `}
      </Script> */}
      <Component {...pageProps} />
    </>
  ) : (
    
    <>
      <CookieBanner />
      <Component {...pageProps} />
    </>
  )
}
