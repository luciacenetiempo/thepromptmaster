import { getPostFromCategory } from '../../lib/wordpress';
import HeaderPlain from '../../components/HeaderPlain'
import Link from 'next/link';
import LoopingText from '../../components/LoopingText'
import NewsletterFormMailerlite from '../../components/NewsletterFormMailerlite';

export const metadata = {  
  title: "Midjourney Discord - The Prompt Master",
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

export default async function Page() {
  const newsAI = await getPostFromCategory(1);
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
      </div>

      <div className='section-content section-content--links'>
        <div className='content rich-text-block rich-text-block'>
          <span><br/></span>
          <span><br/></span>
          <h3>😎 Entra nel mio server dedicato a Midjourney!</h3>
          <Link
            href={'https://discord.gg/StWWk9Rq'}
            className='boxLink'
            target='_blank'   
          >
            <h5>🔥 Hai seguito il mio corso?</h5>
            <p>Entra subito nel server per avere sempre a portata di mano</p>
            <p>tutte le estetiche, gli stili e le impostazioni che ti ho mostrato!</p>
            <span className='CTA'>vai al server <strong>MIDJOURNEY</strong></span>
          </Link>
          <span><br/></span>
          <span><br/></span>
          <div className='spacer'></div>
          {/* <span><br/></span>
          <span><br/></span>
          <h4>Scopri il Futuro dell'Intelligenza Artificiale</h4>
          <p>Resta sempre informato con insights settimanali direttamente nella tua inbox.</p>
          <NewsletterFormMailerlite 
            listId='115595877754603214' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
          /> */}
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
            text={`L'AI come non te l'aspettavi`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
    </>
  );
}