import Header from '/components/Header'
import HeaderPlain from '../../../components/HeaderPlain'
import LoopingText from '../../../components/LoopingText'
import NewsletterFormSlide from '../../../components/NewsletterFormSlide';

export const metadata = {  
  title: "FBA - The Prompt Master",
  description: "L'intelligenza artificiale come non te l'aspettavi",
  metadataBase: new URL('https://www.thepromptmaster.it'),
  alternates: {
    canonical: '',
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
        {/* <div className="strip">
          <LoopingText
            text={`newsletter`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div> */}
      </div>

      <div className='section-content'>
        <div className='content rich-text-block rich-text-block--newsletter'>
          <h2 className='tx-center'>Inserisci il tuo indirizzo<br/>e-mail per visualizzare le slide</h2>
          <NewsletterFormSlide 
            listId='143770881076757629' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
            speechName='AI360'
            slideLink='/file/ai360/20250120-ai360.pdf'
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
        {/* <div className="strip">
          <LoopingText
            text={`AI WEEK`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div> */}
      </div>
    </>
  );
}