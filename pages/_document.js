import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="it">
      <Head>
      </Head>
      <body>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNQFCZCN"
            height="0" 
            width="0" 
            style={{
              display: "none",
              visibility: "hidden"
            }}
            >
          </iframe>
        </noscript>
        <Script src="https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127" type="text/javascript"></Script>
        <Script>
          fetch("https://assets.mailerlite.com/jsonp/863030/forms/115595877754603214/takel")
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
