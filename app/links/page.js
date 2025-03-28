import { getPostFromCategory } from '../../lib/wordpress';
import HeaderPlain from '../../components/HeaderPlain'
import Link from 'next/link';
import LoopingText from '../../components/LoopingText'
import NewsletterFormMailerlite from '../../components/NewsletterFormMailerlite';

export const metadata = {  
  title: "Link - The Prompt Master",
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
          <h3>😎 Diventa un master</h3>
          <Link
            href={'/blog/category/prompt-design'}
            className='boxLink' 
          >
            <h5>🔥 Prompt Engineering</h5>
            <p>Diventa un vero Prompt Master</p>
            <span className='CTA'>vai al corso <strong>GRATIS</strong></span>
          </Link>
          <Link
            href={'https://app.aiplay.it/categories/corso-chatgpt'}
            className='boxLink'
            target='_blank'   
          >
            <h5>💣 ChatGPT Prompt Corso Live</h5>
            <p>Aumenta la produttività con ChatGPT</p>
            <span className='CTA'>vai al corso su <strong>AI PLAY</strong></span>
          </Link>
          {/* <Link
            href={'https://www.amazon.it/ChatGPT-Domina-lIntelligenza-Artificiale-Cenetiempo-ebook/dp/B0CBHM58JL/'}
            className='boxLink'
            target='_blank'  
          >
            <h5>👉 Domina l'intelligenza artificiale</h5>
            <p>L'ebook perfeto se sei alle prime armi!</p>
            <span className='CTA'>acquista l'ebook su <strong>Amazon</strong></span>
          </Link> */}
          <div className='spacer'></div>

          <h4>Scopri il Futuro dell'Intelligenza Artificiale</h4>
          <p>Resta sempre informato con insights settimanali direttamente nella tua inbox.</p>
          <NewsletterFormMailerlite 
            listId='115595877754603214' 
            label='Inserisci il tuo indirizzo email!' 
            submit='Iscriviti!' 
            success=''
            error=''
          />
          <div className='spacer'></div>
          <h3>🤯 News imperdibili dal mondo dell'AI!</h3>
          {newsAI.slice(0,3).map((post, index) => (
            <Link
              href={'/blog/' + post.slug}
              className='boxLink'
            >
              <h5 dangerouslySetInnerHTML={{ __html: `📣 ${post.title.rendered}` }}></h5>
              <p>{post.incipit}</p>
              <span className='CTA'>leggi il post</span>

            </Link>
          ))}
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
            text={`L'AI come non la immaginavi`}
            size='small'
            velocity={0.08}
            color='dark'
          />
        </div>
      </div>
    </>
  );
}