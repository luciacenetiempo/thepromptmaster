import Head from 'next/head'
import HeaderPlain from '@/components/HeaderPlain'
import LoopingText from '@/components/LoopingText'
import NewsletterForm from '@/components/NewsletterForm'
export default function Newsletter() {
  return (
    <>
      <Head>
        <title>The Prompt Master - Newsletter Italiana sull'intelligenza artificiale</title>
      </Head>
      <HeaderPlain />
      <div className='headMarginSmall'>
        <div className="strip">
          <LoopingText
            text='THE PROMPT MASTER'
            size='big'
            velocity={0.08}
            color='dark'
          />
        </div>
        <div className="strip">
          <LoopingText
            text={`newsletter`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>

      <div className='section-content'>
        <div className='content rich-text-block rich-text-block--newsletter'>
          <h1>Scopri il Futuro dell'Intelligenza Artificiale</h1>
          <NewsletterForm />
          <h3>Resta sempre informato con insights settimanali direttamente nella tua inbox.</h3>
          <p>Ecco una piccola anteprima di quello che ti aspetta ogni settimana nella tua casella di posta:</p>
          <p><strong>🤖 Prompt per mettere il turbo: </strong><br />
              ogni settimana un nuovo prompt da provare per mettere il turbo alla tua produttività e imparare come comunicare sempre meglio con i ChatBot AI diventando un vero e proprio PROMPT HERO!</p>
          <p><strong>🎨 Creatività con AI: </strong><br />
              ogni newsletter includerà un prompt creativo accompagnato da un'immagine generata tramite AI</p>
          <p><strong>💊 Approfondimenti e News:</strong><br />
              approfondimenti sulle notizie più importanti nel settore dell'AI, accompagnati da una selezione delle notizie più rilevanti della settimana da tutto il mondo.</p>
          <p><strong>🔥 I migliori tool AI della settimana:</strong><br />
              una recensione dettagliata su un tool AI che ho provato personalmente, oltre a una lista di altri 5 tool da esplorare, con link diretti per approfondire.</p>
          <p><strong>🚀 Molto molto altro: </strong><br />
              scopri ogni settimana sempre di più sul mondo dell'AI per essere sul pezzo!</p>
          <h4>🎁 ed in più, subito in regalo per te la BIBBIA DI MIDJOURNEY</h4>
          <h2>Non restare indietro!<br/>Iscriviti subito!</h2>
          <NewsletterForm />
        </div>
      </div>
      <div className=''>
        <div className="strip">
          <LoopingText
            text='THE PROMPT MASTER'
            size='big'
            velocity={0.08}
            color='dark'
          />
        </div>
        <div className="strip">
          <LoopingText
            text={`newsletter`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
    </>
  )
}
