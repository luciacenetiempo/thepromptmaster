import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
  <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QXT3DWCP13"
        strategy="afterInteractive"
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
