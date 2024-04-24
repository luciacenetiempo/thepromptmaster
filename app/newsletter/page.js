import Header from '../../components/Header'
import HeaderPlain from '../../components/HeaderPlain'
import LoopingText from '../../components/LoopingText'
import NewsletterFormMailerlite from '../../components/NewsletterFormMailerlite';

export const metadata = {  
  title: "Newsletter - The Prompt Master",
  description: "L'intelligenza artificiale come non te l'aspettavi",
  metadataBase: new URL('https://www.thepromptmaster.it'),
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    images: '/og-image.png',
  },
  keywords: ['ChatGPT', 'Midjourney', 'Chat GPT', 'Prompt', 'Prompt Engineering', 'Prompt Design', 'Prompt ChatGPT', 'Intelligenza Artificiale'],
  authors: [{ name: 'Lucia Cenetiempo', url: 'https://www.thepromptmaster.it' }],
}

export default function Page() {
  return (
    <>
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
          <NewsletterFormMailerlite 
            listId='115595877754603214' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
          />
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
          <NewsletterFormMailerlite 
            listId='115595877754603214' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
          />
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
  );
}