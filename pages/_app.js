import '@/styles/globals.css'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (<>

    <Script
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
    </Script>
    <Component {...pageProps} />
  </>)
}
