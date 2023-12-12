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
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
